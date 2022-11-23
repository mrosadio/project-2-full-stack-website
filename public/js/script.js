// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {

  let cardsDate = document.getElementsByClassName('card-date');
  for (let i = 0; i < cardsDate.length; i++) {
    cardsDate[i].innerText = cardsDate[i].innerText.slice(4, 15);
  }
  console.log("project-2-full-stack-website JS imported successfully!");
});