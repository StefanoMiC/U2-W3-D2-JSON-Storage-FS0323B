window.addEventListener("DOMContentLoaded", () => {
  // Seleziono i bottoni e applico onclick
  const btnSetDark = document.getElementById("setDark");
  btnSetDark.onclick = setDarkTheme; // setDarkTheme(event)

  const btnRemDark = document.getElementById("remDark");
  btnRemDark.onclick = remDarkTheme; // setDarkTheme(event)

  console.log("DISCOGRAPHY", discography);

  const container = document.getElementById("content");
  // la variabile discography vive in discography.js
  discography.forEach(album => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${album.title}</h3>
        <span>${album.artist}</span>
        <span>${album.year}</span>
        <ul>
        ${album.tracks.map(track => `<li>${track}</li>`).join("")}
        </ul>
    `;
    // per ogni card creata si aggancia un onclick
    card.onclick = event => {
      // al click della card...
      const albumObj = { title: album.title, artist: album.artist };
      // inserimento dell'album cliccato nel localStorage
      localStorage.setItem("prevSetAlbum", JSON.stringify(albumObj));

      //   // gestione del bordo al click della card
      //   const cards = document.querySelectorAll(".card");

      //   // si rimuove la classe yellow a tutte le card
      //   cards.forEach(card => card.classList.remove("yellow"));

      // cerco la card precedentemente selezionata
      const selectedCard = document.querySelector(".card.yellow");
      // se presente...
      if (selectedCard) {
        // rimuovo solo a lei la classe yellow
        selectedCard.classList.remove("yellow");
      }
      // si applica la classe yellow alla card cliccata
      event.currentTarget.classList.add("yellow");
    };

    // fuori dalla logica di onclick....

    // se la card attualmente generata corrisponde all'ultima salvata nello storage (per titolo) la funzione colorLastSelectedAlbum le colorerà il bordo
    colorLastSelectedAlbum(card, album);

    container.appendChild(card);
  });

  // fuori dalla logica della card...

  manageThemeStyle();
  //   checkForPreviousAlbumSelection();
});

// APPROCCIO D.R.Y. — Don't Repeat Yourself, creo la funzione per riutilizzare un pezzo di codice sempre uguale senza ripeterlo
const manageThemeStyle = () => {
  // controllerò sia al caricamento della pagina, sia dopo aver cliccato il bottone, la presenza del valore associato a "theme",
  const themeInStorage = localStorage.getItem("theme"); // controlliamo la presenza di un precedente tema impostato
  // se presente entreremo nel blocco dell'if e applicheremo la classe all'elemento HTML
  if (themeInStorage) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const setDarkTheme = event => {
  console.log(event.target);
  //   event.target.style.borderColor = "red";
  localStorage.setItem("theme", "dark");
  manageThemeStyle();
};

const remDarkTheme = () => {
  localStorage.removeItem("theme");
  manageThemeStyle();
};

// const checkForPreviousAlbumSelection = () => {
//   const lastSelectedAlbumStr = localStorage.getItem("prevSetAlbum");

//   if (lastSelectedAlbumStr) {
//     const parsedAlbum = JSON.parse(lastSelectedAlbumStr);
//     alert(`l'ultima volta hai selezionato l'artista: ${parsedAlbum.artist} e la canzone: ${parsedAlbum.title}`);
//   }
// };

const colorLastSelectedAlbum = (card, album) => {
  const lastSelectedAlbumStr = localStorage.getItem("prevSetAlbum");

  if (lastSelectedAlbumStr) {
    const parsedAlbum = JSON.parse(lastSelectedAlbumStr);
    if (parsedAlbum.title === album.title) {
      card.classList.add("yellow");
    }
  }
};
