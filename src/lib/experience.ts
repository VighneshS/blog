const periods = [
  { start: new Date('2016-08-01'), end: new Date('2020-12-01') }, // Sr. SE @ Revature
  { start: new Date('2022-02-01'), end: new Date('2022-09-01') }, // Graduate RA @ UT Arlington
  { start: new Date('2022-09-01'), end: new Date('2023-01-01') }, // Data Analyst Intern @ Revature
  { start: new Date('2023-01-01'), end: new Date('2024-07-01') }, // ML Engineer Intern @ Allic Infotech
  { start: new Date('2024-07-01'), end: null },                   // Sr. SE @ Kripya (current)
];

const totalMonths = periods.reduce((acc, { start, end }) => {
  const e = end ?? new Date();
  return acc + (e.getFullYear() - start.getFullYear()) * 12 + (e.getMonth() - start.getMonth());
}, 0);

export const yearsExp = Math.floor(totalMonths / 12);
