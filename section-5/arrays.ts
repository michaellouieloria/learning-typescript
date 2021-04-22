//const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
// const carsByMake: string[][];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference with extracting values
const car = carMakers[0];
const myCar = carMakers.pop;

carMakers.map((car: string): string => {
  return car;
});

// Flexible types
//const importantDates: (Date | string)[] = [];
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-01-01');
importantDates.push(new Date());
