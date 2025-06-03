// Functionize Minecraft Fishing Start Code

let char = document.getElementById("character-select");

char.addEventListener("change", changeChar);

function changeChar() {
  let char = document.getElementById("character-select");

  if (char.value == "villager") {
    document.getElementById("charpic").innerHTML =
      '<img src ="img/villager.jpg" id ="vilpic">';
    document.getElementById("vilpic").classList.add("character-img");
  } else if (char.value == "steve") {
    document.getElementById("charpic").innerHTML =
      '<img src ="img/steve.jpg" id ="stepic">';
    document.getElementById("stepic").classList.add("character-img");
  } else if (char.value == "alex") {
    document.getElementById("charpic").innerHTML =
      '<img src ="img/alex.jpg" id ="alepic">';
    document.getElementById("alepic").classList.add("character-img");
  }
}

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

let codNum = 0;
let salNum = 0;
let tropNum = 0;
let puffNum = 0;

function fishBtnClicked() {
  let steChance = Math.random();
  console.log(steChance);
  let char = document.getElementById("character-select");

  if (char.value == "steve") {
    if (steChance < 0.7) {
      console.log("Cod");
      codNum++;
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      document.getElementById("num-cod").innerHTML = codNum;
    } else if (steChance < 0.9) {
      console.log("Salmon");
      salNum++;
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      document.getElementById("num-salmon").innerHTML = salNum;
    } else if (steChance < 0.95) {
      console.log("Tropical Fish");
      tropNum++;
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      document.getElementById("num-tropical").innerHTML = tropNum;
    } else if (steChance < 1) {
      console.log("PufferFish");
      puffNum++;
      document.getElementById("result-img").src = "img/Pufferfish.png";
      document.getElementById("num-puffer").innerHTML = puffNum;
    }
  } else if (char.value == "alex") {
    if (steChance < 0.1) {
      console.log("Cod");
      codNum++;
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      document.getElementById("num-cod").innerHTML = codNum;
    } else if (steChance < 0.2) {
      console.log("Salmon");
      salNum++;
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      document.getElementById("num-salmon").innerHTML = salNum;
    } else if (steChance < 0.5) {
      console.log("Tropical Fish");
      tropNum++;
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      document.getElementById("num-tropical").innerHTML = tropNum;
    } else if (steChance < 1) {
      console.log("PufferFish");
      puffNum++;
      document.getElementById("result-img").src = "img/Pufferfish.png";
      document.getElementById("num-puffer").innerHTML = puffNum;
    }
  } else if (char.value == "villager") {
    if (steChance < 0.25) {
      console.log("Cod");
      codNum++;
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      document.getElementById("num-cod").innerHTML = codNum;
    } else if (steChance < 0.5) {
      console.log("Salmon");
      salNum++;
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      document.getElementById("num-salmon").innerHTML = salNum;
    } else if (steChance < 0.75) {
      console.log("Tropical Fish");
      tropNum++;
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      document.getElementById("num-tropical").innerHTML = tropNum;
    } else {
      console.log("PufferFish");
      puffNum++;
      document.getElementById("result-img").src = "img/Pufferfish.png";
      document.getElementById("num-puffer").innerHTML = puffNum;
    }
  }
}
