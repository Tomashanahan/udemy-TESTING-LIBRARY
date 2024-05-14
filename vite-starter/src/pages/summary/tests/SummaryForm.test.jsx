import { screen, render, fireEvent } from "@testing-library/react";
import App from "../../../App";

describe("SummaryForm", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("checkout and button flow", () => {
    const button = screen.getByRole("button", { name: /confirm order/i });
    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("Checkbox disables button on first click and enables on second click", () => {
    const button = screen.getByRole("button", { name: /confirm order/i });
    const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
