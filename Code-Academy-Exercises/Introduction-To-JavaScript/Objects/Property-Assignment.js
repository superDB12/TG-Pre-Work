let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 10;
delete spaceship['Secret Mission'];

//Must bracket notation be used if the property contains special characters? ie a "space"?
//I just looked at the previous exercise. Answer is yes to above question.
