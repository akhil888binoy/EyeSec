const mockDataTeam2 = [];

// Generate random values for each day from 2022-01-01 to 2023-09-25
const startDate = new Date('2022-01-01');
const endDate = new Date('2023-09-25');

const currentDate = new Date(startDate);

while (currentDate <= endDate) {
  const randomValue = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${dayOfMonth}`;

  mockDataTeam2.push({
    day: formattedDate,
    value: randomValue,
  });

  // Move to the next day
  currentDate.setDate(currentDate.getDate() + 1);
}

export { mockDataTeam2 };
