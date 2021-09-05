import { EnhancedAutopilot, ModelS } from "./decorator";

describe("decorator pattern", () => {
  it("should decorate an tesla model S", () => {
    const myTesla = new ModelS();

    const myEnhancedTesla = new EnhancedAutopilot(myTesla);

    expect(myEnhancedTesla.getDescription()).toEqual(
      "Model S, enhanced autopilot"
    );
    expect(myEnhancedTesla.cost()).toEqual(78000);
  });
});
