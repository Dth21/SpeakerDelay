const numberOfSpeakers = document.getElementById("nr-speakers");
const SpeakersDiv = document.getElementById("speakers");
let temp = document.getElementById("temperature");

let numberOfDivs = 0;
let programRunTimes = 0;
let historyNumberOfDivs = [0];
let tempForList = 0;

/* creates first elements on the page:
1. the temperature list based on database
*/
createTempList();

//used only when changing the number of speakers
function refreshCalculatorDivs() {
  // resets page in case user deletes the input in number of speakers field
  if (programRunTimes > 0 && numberOfSpeakers.value === "") {
    document.location.reload(true);
  } else {
    hideError();
    hideOldSpeakerCalculatorDiv();
    createSpeakerCalculatorDiv();
  }
}

// used for hiding error when changing the number of speakers
function hideError() {
  error.style.visibility = "hidden";
}

function hideOldSpeakerCalculatorDiv() {
  for (
    let hoscdRunner = 0;
    hoscdRunner < historyNumberOfDivs[programRunTimes];
    hoscdRunner++
  ) {
    let specialProgramRunTimes = programRunTimes - 1;
    let div = document.getElementById(
      specialProgramRunTimes + "-" + "speakerCalculatorDiv-" + hoscdRunner
    );
    div.style.display = "none";
  }
}

// creates temp list based on database values
function createTempList() {
  for (let ctlRunner = 0; ctlRunner < tempDatabase.length; ctlRunner++) {
    tempForList = tempDatabase[ctlRunner].temp;
    let option = document.createElement("option");
    option.setAttribute("value", tempForList);
    option.innerText = tempForList;
    temp.appendChild(option);
  }
}

// creates divs up to the number of speakers
function createSpeakerCalculatorDiv() {
  numberOfDivs = 0;

  // used for hiding the divs before creating new ones
  historyNumberOfDivs.push(numberOfSpeakers.value);

  do {
    // creating ID's based on number of Divs and Program Run Times

    let speakerCalculatorDiv = document.createElement("div");
    speakerCalculatorDiv.setAttribute(
      "id",
      programRunTimes + "-" + "speakerCalculatorDiv-" + numberOfDivs
    );
    speakerCalculatorDiv.setAttribute(
      "style",
      "display: flex; width: 100%; flex-direction: row; align-items: center; justify-content: space-evenly;"
    );

    let label = document.createElement("label");
    label.setAttribute(
      "for",
      programRunTimes + "-" + "distance-" + numberOfDivs + "-speaker"
    );
    label.innerText = "Please input the distance";

    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute(
      "id",
      programRunTimes + "-" + "distance-" + numberOfDivs + "-speaker"
    );

    let paragraphOne = document.createElement("p");
    paragraphOne.setAttribute(
      "id",
      programRunTimes + "-" + "speakerDelay-" + numberOfDivs
    );
    paragraphOne.innerText = "0";

    let paragraphSecond = document.createElement("p");
    paragraphSecond.innerText = "ms.";

    speakerCalculatorDiv.appendChild(label);
    speakerCalculatorDiv.appendChild(input);
    speakerCalculatorDiv.appendChild(paragraphOne);
    speakerCalculatorDiv.appendChild(paragraphSecond);

    SpeakersDiv.appendChild(speakerCalculatorDiv);

    numberOfDivs++;
  } while (numberOfDivs < numberOfSpeakers.value);

  programRunTimes++;
}
