import { Fan, FanState, TemperatureDisplay, WeatherStation } from "./observer";

describe("observer pattern", () => {
  it("temperature display should observe the weather station temperature change", () => {
    const weatherStation = new WeatherStation();

    const temperatureDisplay = new TemperatureDisplay(weatherStation);

    weatherStation.setTemperature(100);
    expect(temperatureDisplay.getDisplayInfo()).toEqual("Temperature is: 100");

    weatherStation.setTemperature(45);
    expect(temperatureDisplay.getDisplayInfo()).toEqual("Temperature is: 45");
  });

  it("fan should turn on when the temperature is greater than 30", () => {
    const weatherStation = new WeatherStation();

    const temperatureDisplay = new Fan(weatherStation);
    expect(temperatureDisplay.getState()).toEqual(FanState.Off);

    weatherStation.setTemperature(32);
    expect(temperatureDisplay.getState()).toEqual(FanState.On);
  });

  it("fan should turn off when the temperature is less than 25", () => {
    throw new Error("Not implemented yet");
  });
});
