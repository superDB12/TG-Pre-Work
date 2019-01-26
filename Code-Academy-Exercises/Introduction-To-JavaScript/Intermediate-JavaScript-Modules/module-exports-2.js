const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//Created a module with a property and a function

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

//Called the newly created module here in 2-missionControl.js
