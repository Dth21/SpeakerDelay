let error = document.getElementById("error");
let measurementChoice = document.getElementById("measurement");
let speedSound = document.getElementById("speed-of-sound");

let distancesValues = [];
let testUserInput = 0;
let speed = 0;
let delay = 0;

userInputCheck();

function refreshPage() {
  programRunTimes--;
  testUserInput = 0; //used to test for user input
  distancesValues = [];

  /* 
  1. checks if there is user input
  2. adds the distences (user input) to a database
  */

  for (let rfRunner = 0; rfRunner < numberOfSpeakers.value; rfRunner++) {
    let distanceSp = document.getElementById(
      programRunTimes + "-" + "distance-" + rfRunner + "-speaker"
    );

    if (distanceSp.value === "") {
      testUserInput--;
    } else {
      testUserInput++;
    }

    distancesValues.push(distanceSp.value);
  }

  findTemp();
  userInputCheck();

  programRunTimes++;
}

function findTemp() {
  /*
1. shows user the speed of sound for his selection
2. records the speed for later usage
  */

  let info = tempDatabase.find((item) => item.temp == temp.value);

  if (measurementChoice.value == "feet") {
    speedSound.innerText = "The speed of sound is " + info.speedFeets + " ft/s";
    speed = info.speedFeets;
  } else {
    speedSound.innerText = "The speed of sound is " + info.speedMeters + " m/s";
    speed = info.speedMeters;
  }
}

function userInputCheck() {
  // checks for user input for the number of speakers and for distances

  if (numberOfSpeakers.value === "") {
    error.style.visibility = "visible";
    error.innerText =
      "Please enter the number of speakers you need to calculate delay for!";
  } else {
    error.style.visibility = "hidden";
    if (testUserInput != numberOfSpeakers.value) {
      error.style.visibility = "visible";
      error.innerText = "Please enter a valid distance!";
    } else {
      error.style.visibility = "hidden";
    }

    if (testUserInput != numberOfSpeakers.value) {
      error.innerText =
        "At least a distance is not set. In case you forgot, you can add the distance now in the appropiate fied. Or you can insert a lower number of speakers so that it matches your needs.";
    } else {
      error.style.visibility = "hidden";
      calculateDelay();
    }
  }
}

function calculateDelay() {
  // calculates and shows delay

  for (let cdRunner = 0; cdRunner < numberOfSpeakers.value; cdRunner++) {
    let speakerDelay = document.getElementById(
      programRunTimes + "-" + "speakerDelay-" + cdRunner
    );

    delay = distancesValues[cdRunner] / speed;
    speakerDelay.innerText = delay;
  }
}

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    refreshPage();
  }
});
