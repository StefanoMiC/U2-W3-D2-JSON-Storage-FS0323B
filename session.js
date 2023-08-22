let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

window.onload = () => {
  updateCounterInDOM();

  const incrBtn = document.getElementById("incrementBtn");
  incrBtn.onclick = incrementCounter;
};

const updateCounterInDOM = () => {
  const p = document.getElementById("counter");
  p.innerText = counterValue;
};

const incrementCounter = () => {
  counterValue += 1;
  console.log(counterValue);
  updateCounterInDOM();

  sessionStorage.setItem("lastCounterValue", counterValue);
};
