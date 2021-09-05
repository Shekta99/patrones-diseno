describe("facade pattern", () => {
  it("should run the movie scene for a home automated system", () => {
    const tv = new TV();
    const lights = new Lights();
    const soundSystem = new SoundSystem();

    expect(tv.getState()).toEqual(DeviceState.OFF);
    expect(lights.getLevel()).toEqual(0);
    expect(soundSystem.getVolume()).toEqual(0);

    const homeAutomation = new HomeAutomation(tv, lights, soundSystem);
    homeAutomation.runScene("movie");

    expect(tv.getState()).toEqual(DeviceState.ON);
    expect(lights.getLevel()).toEqual(40);
    expect(soundSystem.getVolume()).toEqual(100);
  });
});
