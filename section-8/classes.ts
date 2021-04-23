class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}


  // drive(): void {
  //   console.log('test');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('test car');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(10, 'red');
car.startDrivingProcess();
console.log(car.wheels);
//car.honk();
