// Function to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shiftData = [
  {
    id: 'group A',
    data: Array.from({ length: 50 }, () => ({
      x: getRandomInt(1, 8),
      y: getRandomInt(1, 120),
    })),
  },
  {
    id: 'group B',
    data: Array.from({ length: 50 }, () => ({
      x: getRandomInt(1, 8),
      y: getRandomInt(1, 120),
    })),
  },
  {
    id: 'group C',
    data: Array.from({ length: 50 }, () => ({
      x: getRandomInt(1, 8),
      y: getRandomInt(1, 120),
    })),
  },
  {
    id: 'group D',
    data: Array.from({ length: 50 }, () => ({
      x: getRandomInt(1, 8),
      y: getRandomInt(1, 120),
    })),
  },
  {
    id: 'group E',
    data: Array.from({ length: 50 }, () => ({
      x: getRandomInt(1, 8),
      y: getRandomInt(1, 120),
    })),
  },
];
