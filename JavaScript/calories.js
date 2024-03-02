let svg = document.querySelector(".toggler");
let toggleNav = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav");

svg.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav");
});
let input = document.querySelector("#input");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let activity = input.value;
  console.log(activity);
  callAPI(activity);
});

let card1NameElement = document.querySelector(".card-1-name");
let card1CalElement = document.querySelector(".card-1-cal");
let card1TimeElement = document.querySelector(".card-1-time");

let card2NameElement = document.querySelector(".card-2-name");
let card2CalElement = document.querySelector(".card-2-cal");
let card2TimeElement = document.querySelector(".card-2-time");

let card3NameElement = document.querySelector(".card-3-name");
let card3CalElement = document.querySelector(".card-3-cal");
let card3TimeElement = document.querySelector(".card-3-time");

let card4NameElement = document.querySelector(".card-4-name");
let card4CalElement = document.querySelector(".card-4-cal");
let card4TimeElement = document.querySelector(".card-4-time");

const url =
  "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=";
const header = {
  headers: {
    Accept: "application/json",
    "X-RapidAPI-Key": "0e6ed78d9fmshc1d7ad822cf468fp1f020cjsn139147987250",
    "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
  },
};
async function callAPI(activity) {
  try {
    const response = await axios.get(url + activity, header);

    console.log(response.data);

    card1NameElement.innerHTML = response.data[0].name;
    card1CalElement.innerHTML = response.data[0].calories_per_hour;
    card1TimeElement.innerHTML = response.data[0].duration_minutes;
    card2NameElement.innerHTML = response.data[1].name;
    card2CalElement.innerHTML = response.data[1].calories_per_hour;
    card2TimeElement.innerHTML = response.data[1].duration_minutes;
    card3NameElement.innerHTML = response.data[2].name;
    card3CalElement.innerHTML = response.data[2].calories_per_hour;
    card3TimeElement.innerHTML = response.data[2].duration_minutes;
    card4NameElement.innerHTML = response.data[3].name;
    card4CalElement.innerHTML = response.data[3].calories_per_hour;
    card4TimeElement.innerHTML = response.data[3].duration_minutes;
  } catch (error) {
    console.log(error);
  }
}
let homeShort = document.querySelector(".name");
homeShort.addEventListener("click", () => {
  window.location.href = "main.html";
});
