document.addEventListener("DOMContentLoaded", function () {
  let svg = document.querySelector(".toggler");
  let toggleNav = document.querySelector(".toggle-nav");
  let nav = document.querySelector(".nav");

  svg.addEventListener("click", () => {
    nav.classList.toggle("toggle-nav");
  });

  let select = document.querySelector(".custom-select");
  let btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    let muscles = select.value;
    callApi(muscles);
  });

  let card1Name = document.querySelector(".card-1-name");
  let card1Difficulty = document.querySelector(".card-1-difficulty");
  let card1Equipment = document.querySelector(".card-1-eqiupment");
  let card1Instruction = document.querySelector(".card-1-instruction");
  let card1Type = document.querySelector(".card-1-type");

  let card2Name = document.querySelector(".card-2-name");
  let card2Difficulty = document.querySelector(".card-2-difficulty");
  let card2Equipment = document.querySelector(".card-2-eqiupment");
  let card2Type = document.querySelector(".card-2-type");
  let card2Instruction = document.querySelector(".card-2-instruction");

  let card3Name = document.querySelector(".card-3-name");
  let card3Difficulty = document.querySelector(".card-3-difficulty");
  let card3Equipment = document.querySelector(".card-3-eqiupment");
  let card3Instruction = document.querySelector(".card-3-instruction");
  let card3Type = document.querySelector(".card-3-type");

  let card4Name = document.querySelector(".card-4-name");
  let card4Difficulty = document.querySelector(".card-4-difficulty");
  let card4Equipment = document.querySelector(".card-4-eqiupment");
  let card4Instruction = document.querySelector(".card-4-instruction");
  let card4Type = document.querySelector(".card-4-type");

  const url =
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=";
  const header = {
    headers: {
      Accept: "application/json",
      "X-RapidAPI-Key": "0e6ed78d9fmshc1d7ad822cf468fp1f020cjsn139147987250",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  async function callApi(muscles) {
    try {
      let response = await axios.get(url + muscles, header);
      console.log(response.data);

      card1Name.innerHTML = response.data[0].name;
      card1Difficulty.innerHTML = response.data[0].difficulty;
      card1Equipment.innerHTML = response.data[0].equipment;
      card1Instruction.innerHTML = response.data[0].instructions;
      card1Type.innerHTML = response.data[0].type;

      card2Name.innerHTML = response.data[1].name;
      card2Difficulty.innerHTML = response.data[1].difficulty;
      card2Equipment.innerHTML = response.data[1].equipment;
      card2Instruction.innerHTML = response.data[1].instructions;
      card2Type.innerHTML = response.data[1].type;

      card3Name.innerHTML = response.data[2].name;
      card3Difficulty.innerHTML = response.data[2].difficulty;
      card3Equipment.innerHTML = response.data[2].equipment;
      card3Instruction.innerHTML = response.data[2].instructions;
      card3Type.innerHTML = response.data[2].type;

      card4Name.innerHTML = response.data[3].name;
      card4Difficulty.innerHTML = response.data[3].difficulty;
      card4Equipment.innerHTML = response.data[3].equipment;
      card4Instruction.innerHTML = response.data[3].instructions;
      card4Type.innerHTML = response.data[3].type;
    } catch (error) {
      console.log(error);
    }
  }

  let homeShort = document.querySelector(".name");
  homeShort.addEventListener("click", () => {
    window.location.href = "main.html";
  });

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      console.log("Enter key pressed!");
      let muscles = select.value;
      callApi(muscles);
    }
  }

  document.addEventListener("keypress", handleKeyPress);
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
