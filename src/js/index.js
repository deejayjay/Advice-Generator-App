const btnDice = document.getElementById("btnDice");

window.addEventListener("load", init);
btnDice.addEventListener("click", loadNewAdvice);

function init() {
  loadNewAdvice();
}

async function loadNewAdvice() {
  const API_URL = "https://api.adviceslip.com/advice";
  const adviceNumber = document.getElementById("adviceNumber");
  const adviceContent = document.getElementById("adviceContent");
  const divider = document.getElementById("divider");

  adviceNumber.classList.remove("advice-loaded");
  adviceContent.classList.remove("advice-loaded");
  divider.classList.remove("advice-loaded");

  // Fetch data from the Advice Slip JSON API
  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(data);

  if (!data) {
    return;
  }

  adviceNumber.classList.add("advice-loaded");
  adviceContent.classList.add("advice-loaded");
  divider.classList.add("advice-loaded");

  // Extract id and advice from the API response
  const { id, advice } = data.slip;

  console.log(id, advice);

  adviceNumber.textContent = id;
  adviceContent.textContent = `“${advice}”`;
}
