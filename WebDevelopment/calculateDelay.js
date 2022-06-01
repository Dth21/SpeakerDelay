let error = document.getElementById("error");
let temp = document.getElementById("temperature");
let measurementChoice = document.getElementById("measurement");
let speedSound = document.getElementById("speed-of-sound");

let distancesValues = [];
let sum = 0;
let speed = 0;
let delay = 0;
let v = 1;

function refreshPage() {
  programRunTimes--;
  sum = 0;
  distancesValues = [];

  for (let b = 1; b <= numberOfSpeakers.value; b++) {
    inputID2 = programRunTimes + "-" + "distance-" + b + "-speaker";
    let distanceSp = document.getElementById(inputID2);

    if (distanceSp.value === "") {
      sum--;
    } else {
      sum++;
    }

    distancesValues.push(distanceSp.value);
  }

  findTemp();
  delayValueCheck();
  calculateDelay();

  programRunTimes++;
}

function findTemp() {
  let info = array.find((item) => item.temp === temp.value);

  if (measurementChoice.value == "feet") {
    speedSound.innerText = info.showFeet;
    speed = info.speedFeets;
  } else {
    speedSound.innerText = info.showMeters;
    speed = info.speedMeters;
  }
}

function delayValueCheck() {
  if (sum != numberOfSpeakers.value) {
    error.style.visibility = "visible";
    error.innerText = "Please enter a valid distance";
  } else {
    error.style.visibility = "hidden";
  }
}

function calculateDelay() {
  for (let v = 1; v <= numberOfSpeakers.value; v++) {
    paragraphOneID1 = programRunTimes + "-" + "speakerDelay-" + v;
    let speakerDelay = document.getElementById(paragraphOneID1);

    delay = distancesValues[v - 1] / speed;
    speakerDelay.innerText = delay;
  }
}

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    refreshData();
  }
});
