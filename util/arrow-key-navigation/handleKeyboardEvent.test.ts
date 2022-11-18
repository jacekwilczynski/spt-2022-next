import { findNextTarget } from "./findNextTarget";
import { handleKeyboardEvent } from "./handleKeyboardEvent";

jest.mock("./findNextTarget", () => ({
  findNextTarget: jest.fn(),
}));

describe(`handleKeyboardEvent`, () => {
  it("does nothing if target not found", () => {
    // given
    const keyboardEvent = new KeyboardEvent("keydown", { key: "ArrowLeft" });

    const container = document.createElement("div");
    const currentTarget = document.createElement("span");
    container.appendChild(currentTarget);
    container.addEventListener("keydown", handleKeyboardEvent);

    // when
    currentTarget.dispatchEvent(keyboardEvent);

    // then
    expect(findNextTarget).toHaveBeenCalledWith(currentTarget, "left", container);
  });
});
