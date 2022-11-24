// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {

  let cardsDate = document.getElementsByClassName('card-date');
  for (let i = 0; i < cardsDate.length; i++) {
    cardsDate[i].innerText = cardsDate[i].innerText.slice(4, 15);
  }
  //change the cities name to put only the first part before the ","
  let citytitles = document.getElementsByClassName('card-title')
  for (var i = citytitles.length - 1; i >= 0; i--) {
    let cityName = citytitles[i].innerText.split(',')[0]
    citytitles[i].innerText = cityName;
  }

  console.log("project-2-full-stack-website JS imported successfully!");
});