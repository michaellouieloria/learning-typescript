const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
};

const multiplu = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string) => {
  console.log(message);
};

const throwError = (message: string) => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date; weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// Destructuring with annotations
const logDestructureWeather = ({date, weather}: {date: Date; weather: string}): void => {
  console.log(date);
  console.log(weather);
};


logWeather(todaysWeather);
logDestructureWeather(todaysWeather);
