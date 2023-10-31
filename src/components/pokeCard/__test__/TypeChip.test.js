import { render, screen } from "@testing-library/react";
import TypeChip from "../TypeChip";

test("renders the correct type based on the  prop passed", () => {
  render(<TypeChip pokeType="bug" />);
  const chipElement = screen.getByText(/BUG/i);
  expect(chipElement).toBeInTheDocument();
});
