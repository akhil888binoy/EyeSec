// Define your crime types
const crimeTypes = [
  'Theft',
  'Robbery',
  'Vandalism',
  'Assault',
  'Burglary',
  'Drug Offenses',
  'Public Intoxication',
  'Sexual Harassment/Assault',
  // Add more crime types as needed
];

// Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an array of objects with random values for each type of crime
const platData = [];

for (let i = 0; i < 9; i++) {
  // Assuming you want 9 sets of data
  const dataPoint = {};
  crimeTypes.forEach(crimeType => {
    dataPoint[crimeType] = getRandomInt(5, 20); // Generate a random number between 5 and 20
  });
  platData.push(dataPoint);
}

export { platData };
