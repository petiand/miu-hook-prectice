import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchBar from "../SearachBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar inputField works test", () => {
  test("should we have the searchbar rendered on the screen", () => {
    render(<SearchBar />);
    const inputElement = screen.getByLabelText(/Type to search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("can the user type in to the searchbar, and set the value of the seasrchbar corectly", () => {
    render(<SearchBar />);
    const inputElement = screen.getByLabelText(/Type to search/i);
    userEvent.click(inputElement);
    userEvent.keyboard("balbasaur");
    expect(inputElement.value).toBe("balbasaur");
  });

  test("when the user is typing should the value of the input called on the function that is passed in SearchBar component", async () => {
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
