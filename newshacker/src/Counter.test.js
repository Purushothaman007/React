import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("shows initial count as 0", () => {
  render(<Counter />);
  expect(screen.getByTestId("count").textContent).toBe("Count: 0");
});

test("increments count when button is clicked", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("button"));
  expect(screen.getByTestId("count").textContent).toBe("Count: 1");
});
