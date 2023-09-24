export const mockDataTeam = [
  {
    id: 'platform 1',
    color: 'hsl(279, 70%, 50%)',
    data: Array.from({ length: 24 }, (_, index) => ({
      x: index + 1 + ':00',
      y: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    })),
  },
  {
    id: 'platform 2',
    color: 'hsl(327, 70%, 50%)',
    data: Array.from({ length: 24 }, (_, index) => ({
      x: index + 1 + ':00',
      y: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    })),
  },
  {
    id: 'platform 3',
    color: 'hsl(314, 70%, 50%)',
    data: Array.from({ length: 24 }, (_, index) => ({
      x: index + 1 + ':00',
      y: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    })),
  },
  {
    id: 'platform 4',
    color: 'hsl(167, 70%, 50%)',
    data: Array.from({ length: 24 }, (_, index) => ({
      x: index + 1 + ':00',
      y: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    })),
  },
  {
    id: 'platform 5',
    color: 'hsl(315, 70%, 50%)',
    data: Array.from({ length: 24 }, (_, index) => ({
      x: index + 1 + ':00',
      y: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
    })),
  },
];
