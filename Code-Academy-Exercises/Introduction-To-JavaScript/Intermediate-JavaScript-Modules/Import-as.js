import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
   console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
});
}

displayFuelCapacity()

//Imported a module and used it to create a function
