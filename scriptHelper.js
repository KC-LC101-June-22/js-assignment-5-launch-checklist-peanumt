// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(string) {
    let pilotMain =document.getElementById("pilotName");
    let coPilot = document.getElementById("coPilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");
    let allIds = [pilotMain,coPilot,fuelLevel,cargoMass];
    if (pilotMain || coPilot !== String()) {
        window.addEventListener("load", function() {
            let form = document.querySelector("form");
            form.addEventListener("submit", function(event) {
               let usernameInput = document.querySelector("input[name=pilotMain,name=coPilot]");
               if (usernameInput.value === "") {
                  alert("All fields are required!");
                  // stop the form submission
                  event.preventDefault();
               }
            });
         });
        })
        console.log("Is a Number");}
        else if (fuelLevel || cargoMass === isNaN(word)) {
            console.log("Not a number");
        } else if (allIds === "" ) return console.log("Empty")
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
