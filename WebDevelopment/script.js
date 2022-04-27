const temp = document.getElementById("temperature");
const speedSound = document.getElementById("speed-of-sound");
const measurementChoice = document.getElementById("measurement");
const distanceSp1 = document.getElementById("distance-speaker-first");
const delay1speaker = document.getElementById("speaker-delay-1");
const distanceSp2 = document.getElementById("distance-first-second");
const delay2speaker = document.getElementById("speaker-delay-2");
const numberSpeakers = document.querySelector(".nr-speakers");
const button = document.getElementById("button-calculator");

function delayValueCheck() {
  if (distanceSp1.value === "") {
    error.style.visibility = "visible";
    error.innerText = "Please enter a valid distance";
  } else {
    error.style.visibility = "hidden";
  }
}

function findTemp() {
  let info = array.find((item) => item.temp === temp.value);

  if (measurementChoice.value == "feet") {
    speedSound.innerText = info.showFeet;
  } else {
    speedSound.innerText = info.showMeters;
  }
}

function refreshData() {
  findTemp();
  calculateDelay();
  delayValueCheck();
}

function calculateDelay() {
  let info = array.find((o) => o.temp === temp.value);
  let delay1 = 0;
  let delay2 = 0;
  let sum1 = 0;

  if (measurementChoice.value === "feet") {
    delay1 = Number(distanceSp1.value) / Number(info.speedFeets);
    sum1 = Number(distanceSp1.value) + Number(distanceSp2.value);
    delay2 = sum1 / Number(info.speedFeets);
  } else {
    delay1 = Number(distanceSp1.value) / Number(info.speedMeters);
    sum1 = Number(distanceSp1.value) + Number(distanceSp2.value);
    delay2 = sum1 / Number(info.speedMeters);
  }
  delay1speaker.innerText = delay1;
  delay2speaker.innerText = delay2;
}

let forDiv = document.getElementById("for");

function forEachOne() {
  let p = document.createElement("p");
  var text = document.createTextNode("Tutorix is the best e-learning platform");
  p.appendChild(text);
  forDiv.appendChild(p);
  forDiv.className("forDiv");

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}
forEachOne();

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    refreshData();
  }
});
