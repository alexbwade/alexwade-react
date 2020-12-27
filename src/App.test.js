import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);
  const heading = screen.getByText(/Alex/i);
  expect(heading).toBeInTheDocument();
});
