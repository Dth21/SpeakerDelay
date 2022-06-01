const numberOfSpeakers = document.getElementById("nr-speakers");
const SpeakersDiv = document.getElementById("speakers");

let speakerCalculatorDivID = 0;
let labelFor = 0;
let inputID = 0;
let paragraphOneID = 0;
let numberOfDivs = 1;
let programRunTimes = 0;
let history = [0];

createSpeakerCalculatorDiv();

function refreshCalculatorDivs() {
  hideError();
  hideOldSpeakerCalculatorDiv();
  createSpeakerCalculatorDiv();
}

function hideError() {
  error.style.visibility = "hidden";
}

function hideOldSpeakerCalculatorDiv() {
  for (let i = 1; i <= history[programRunTimes]; i++) {
    let a = programRunTimes - 1;
    const b = a + "-" + "speakerCalculatorDiv-" + i;
    let div = document.getElementById(b);
    div.style.display = "none";
  }
}

function createSpeakerCalculatorDiv() {
  numberOfDivs = 1;
  history.push(numberOfSpeakers.value);
  do {
    speakerCalculatorDivID =
      programRunTimes + "-" + "speakerCalculatorDiv-" + numberOfDivs;
    labelFor = programRunTimes + "-" + "distance-" + numberOfDivs + "-speaker";
    inputID = programRunTimes + "-" + "distance-" + numberOfDivs + "-speaker";
    paragraphOneID = programRunTimes + "-" + "speakerDelay-" + numberOfDivs;

    let speakerCalculatorDiv = document.createElement("div");
    speakerCalculatorDiv.setAttribute("id", speakerCalculatorDivID);
    speakerCalculatorDiv.setAttribute(
      "style",
      "display: flex; width: 100%; flex-direction: row; align-items: center; justify-content: space-evenly;"
    );

    let label = document.createElement("label");
    label.setAttribute("for", labelFor);
    label.innerText = "Please input the distance";

    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", inputID);

    let paragraphOne = document.createElement("p");
    paragraphOne.setAttribute("id", paragraphOneID);
    paragraphOne.innerText = "0";

    let paragraphSecond = document.createElement("p");
    paragraphSecond.innerText = "ms.";

    speakerCalculatorDiv.appendChild(label);
    speakerCalculatorDiv.appendChild(input);
    speakerCalculatorDiv.appendChild(paragraphOne);
    speakerCalculatorDiv.appendChild(paragraphSecond);

    SpeakersDiv.appendChild(speakerCalculatorDiv);

    numberOfDivs++;
  } while (numberOfDivs <= numberOfSpeakers.value);
  programRunTimes++;
}
