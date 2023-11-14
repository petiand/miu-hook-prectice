import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ToggleMode from "../ToggleMode";

//split thist tesst
//render ones the componenet befor all(), and clean after each (cleanUp)

beforeEach(() => {
  render(<ToggleMode />);
});

afterEach(cleanup);

const mockedSetDarkMode = jest.fn();
const mockedDarkMode = false;

jest.mock("../../../hooks/useThemeMode", () => {
  return {
    useThemeMode: () => ({
      darkMode: mockedDarkMode,
      setDarkMode: mockedSetDarkMode,
    }),
  };
});

describe("ToggleMode button functionality Test", () => {
  test("Should render toggleMode button on the screen", () => {
    const toggleElement = screen.getByTestId(/toggle/i);
    //screen.logTestingPlaygroundURL();
    expect(toggleElement).toBeInTheDocument();
  });

  test("Should the toggleMode button calls context setter function on click", () => {
    const toggleElement = screen.getByTestId(/toggle/i);
    fireEvent.click(toggleElement);
    expect(mockedSetDarkMode).toHaveBeenCalled();
  });

  // test("ToggleMode button displays correct text and icon for Light Mode", () => {
  //   const toggleElement = screen.getByTestId(/toggle/i);
  //   const toggleElementLightIcone = screen.queryByTestId(/LightModeIcon/i);
  //   expect(toggleElementLightIcone).toBeInTheDocument();
  // });

  //   test("ToggleMode button displays correct text and icon for Dark Mode", () => {
  //     const toggleElement = screen.getByTestId(/toggle/i);
  //     const toggleElementDarkIcone = screen.queryByTestId(/DarkModeIcon/i);
  //     expect(toggleElementDarkIcone).toBeInTheDocument();
  //   });
});
