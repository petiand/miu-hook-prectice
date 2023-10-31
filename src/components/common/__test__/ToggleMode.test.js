import { fireEvent, render, screen } from "@testing-library/react";
import ToggleMode from "../ToggleMode";
import ThemeContext, { Context } from "../../../context/ThemeContext";

const renderComponenet = () => {
  render(
    <Context.Provider value={{ mockedDarkMode, mockedSetDarkMode }}>
      <ToggleMode />;
    </Context.Provider>
  );
};

const mockedSetDarkMode = jest.fn();
const mockedDarkMode = true;

jest.mock("../../../hooks/useThemeMode", () => {
  return {
    useThemeMode: () => ({
      darkMode: mockedDarkMode,
      setDarkMode: mockedSetDarkMode,
    }),
  };
});

describe("ToggleMode button works test", () => {
  test("should the toggleMode rendering on the screen", () => {
    renderComponenet();
    const toggleElement = screen.getByTestId(/toggle/i);
    screen.logTestingPlaygroundURL();
    expect(toggleElement).toBeInTheDocument();
  });

  test("should the toggelMode element call the contex setterfunction when clicked", () => {
    render(
      <ThemeContext>
        <ToggleMode />
      </ThemeContext>
    );
    const toggleElement = screen.getByTestId(/toggle/i);
    fireEvent.click(toggleElement);
    expect(mockedSetDarkMode).toHaveBeenCalled();
  });

  test("shold the button show the correct text and icon for the selected mode", () => {
    renderComponenet();
    const toggleElement = screen.getByTestId(/toggle/i);
    const toggleElementLightIcone = screen.queryByTestId(/LightModeIcon/i);
    const toggleElementDarkIcone = screen.queryByTestId(/DarkModeIcon/i);
    if (mockedDarkMode) {
      expect(toggleElement).toHaveTextContent(/darkmode/i);
      expect(toggleElementDarkIcone).toBeInTheDocument();
      //console.log("darkmode");
    } else {
      expect(toggleElement).toHaveTextContent(/lightmode/i);
      expect(toggleElementLightIcone).toBeInTheDocument();
      //console.log("lightmode");
    }
  });
});
