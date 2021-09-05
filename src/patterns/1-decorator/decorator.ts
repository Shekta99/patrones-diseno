abstract class Car {
  protected abstract description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export class ModelS extends Car {
  protected description = "Model S";

  public cost(): number {
    return 73000;
  }
}

export class ModelX extends Car {
  protected description = "Model X";

  public cost(): number {
    return 77000;
  }
}

abstract class CarOptions {
  abstract decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

export class EnhancedAutopilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return `${this.decoratedCar.getDescription()}, enhanced autopilot`;
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}
