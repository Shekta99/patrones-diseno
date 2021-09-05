interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temperature: number): void;
}

export class WeatherStation implements Subject {
  private temperature: number = 0;
  private observers: Observer[] = [];

  setTemperature(value: number) {
    console.log(`Temperature: ${value}`);
    this.temperature = value;
    this.notifyObservers();
  }

  getTemperature(): number {
    return this.temperature;
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

export class TemperatureDisplay implements Observer {
  private currentDisplayInfo: string = "";

  constructor(weatherStation: Subject) {
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    this.currentDisplayInfo = `Temperature is: ${temperature}`;
  }

  getDisplayInfo(): string {
    return this.currentDisplayInfo;
  }
}

export enum FanState {
  On,
  Off,
}

export class Fan implements Observer {
  private state: FanState = FanState.Off;

  constructor(weatherStation: Subject) {
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    throw new Error("Method not implemented.");
  }

  getState(): FanState {
    return this.state;
  }

  turnOn() {
    this.state = FanState.On;
  }

  turnOff() {
    this.state = FanState.Off;
  }
}
