import { handleKeyboardEvent } from "./handleKeyboardEvent";

describe(`handleKeyboardEvent`, () => {
  it("does nothing if target not found", () => {
    const keyboardEvent = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    handleKeyboardEvent(keyboardEvent);
  });
});
