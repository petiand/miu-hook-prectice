import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchBar from "../SearachBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar input field functionality test", () => {
  test("Should render the searchBar on the screen", () => {
    render(<SearchBar />);
    const inputElement = screen.getByLabelText(/Type to search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("User can type in SearchBar and the value is set correctly", () => {
    render(<SearchBar />);
    const inputElement = screen.getByLabelText(/Type to search/i);
    userEvent.click(inputElement);
    userEvent.keyboard("balbasaur");
    expect(inputElement.value).toBe("balbasaur");
  });

  test("Input value correctly triggers the provided function", async () => {
    const mockedSetSearch = jest.fn();

    render(<SearchBar setSearch={mockedSetSearch} />);
    const inputElement = screen.getByLabelText(/Type to search/i);
    fireEvent.change(inputElement, { target: { value: "balbasaur" } });
    await waitFor(() => {
      expect(mockedSetSearch).toHaveBeenCalled();
      expect(mockedSetSearch).toHaveBeenCalledWith("balbasaur");
    });
  });
});
