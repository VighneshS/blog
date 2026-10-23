// Full-time roles only, so the site matches the resume ("~7 years").
// Internships and the research assistantship are listed under Experience but not counted here.
const periods = [
  { start: new Date('2016-08-01'), end: new Date('2020-12-01') }, // Sr. SE @ Revature
  { start: new Date('2024-07-01'), end: null },                   // Sr. SE @ Kripya (current)
];

const totalMonths = periods.reduce((acc, { start, end }) => {
  const e = end ?? new Date();
  return acc + (e.getFullYear() - start.getFullYear()) * 12 + (e.getMonth() - start.getMonth());
}, 0);

export const yearsExp = Math.round(totalMonths / 12);
