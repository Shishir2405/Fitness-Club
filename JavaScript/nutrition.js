let input = document.querySelector("input");
let productName = document.querySelector(".product");
let calories = document.querySelector(".Calories");
let carbohydrates = document.querySelector(".Carbohydrates");
let cholestrol = document.querySelector(".Cholestrol");
let protein = document.querySelector(".Protein");
let fiber = document.querySelector(".Fiber");
let saturatedFat = document.querySelector(".Saturated_fats");
let totalFat = document.querySelector(".Total_Fat");
let potassium = document.querySelector(".Potassium");
let sodium = document.querySelector(".Sodium");
let serving = document.querySelector(".serving");
let sugar = document.querySelector(".sugar");
let btn = document.querySelector("button");
let info = document.querySelector(".info");
let heading = document.querySelector(".error");
let body = document.querySelector("body");
let head = document.createElement("h1");

const options = {
  method: "GET",
  url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
  headers: {
    "X-RapidAPI-Key": "0e6ed78d9fmshc1d7ad822cf468fp1f020cjsn139147987250",

    "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
  },
};

async function callAPI(food) {
  try {
    options.params = { query: food };
    const response = await axios.request(options);
    console.log(response.data[0]);
    productName.innerText = response.data[0].name;
    cholestrol.innerText = response.data[0].cholesterol_mg;
    calories.innerText = response.data[0].calories;
    carbohydrates.innerText = response.data[0].carbohydrates_total_g;
    protein.innerText = response.data[0].protein_g;
    fiber.innerText = response.data[0].fiber_g;
    saturatedFat.innerText = response.data[0].fat_saturated_g;
    totalFat.innerText = response.data[0].fat_total_g;
    potassium.innerText = response.data[0].potassium_mg;
    sodium.innerText = response.data[0].sodium_mg;
    serving.innerText = response.data[0].serving_size_g;
    sugar.innerText = response.data[0].sugar_g;
    head.remove();
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", () => {
  let text = input.value;
  if (text !== "") {
    callAPI(text);
    head.remove();
    info.style.display = "flex";
  } else {
    info.style.display = "none";
    head.classList.add("head");
    body.append(head);
    head.innerHTML = "<br>Please Enter Food";
  }
});

let svg = document.querySelector(".toggler");
let toggleNav = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav");


svg.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav"); 
  
});
