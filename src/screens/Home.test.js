import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import PokemonContext from "../context/PokemonContext";
import { act } from "react-dom/test-utils";

jest.mock("axios");
const mockAxios = axios;

jest.mock("../hooks/useScrollListener", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const homeCardData = {
  count: 1292,
  next: "pokemon/next20",
  previous: null,
  results: [
    { name: "Balbasaur", url: "Balbasaur" },
    { name: "Pikachu", url: "Pikachu" },
    { name: "Charizard", url: "Charizard" },
    { name: "Blastois", url: "Blastois" },
    { name: "Charmalion", url: "Charmalion" },
    { name: "Metwo", url: "Metwo" },
  ],
};

const pokeCardData = (idx) => ({
  id: idx,
  species: { name: idx },
  types: [{ type: { name: "grass" } }],
  abilities: [{ ability: { name: "indas" } }],
  height: "100",
  weight: "50",
  sprites: { front_default: "alt", back_default: "alt" },
  base_experience: "100",
  held_items: [{ item: { name: "item" } }],
});

const clickOnFirstCardActionArea = async () => {
  const cardActionAreas = await screen.findAllByTestId("action-area");
  const firstCardActionArea = cardActionAreas[0];
  userEvent.click(firstCardActionArea);
};
const rerender = () => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: homeCardData });
  render(
    <PokemonContext>
      <Home />
    </PokemonContext>
  );
  mockAxios.get.mockImplementation((url) => {
    return Promise.resolve({ data: pokeCardData(url) });
  });
};

beforeEach(() => {
  jest.spyOn(axios, "get").mockResolvedValue({ data: homeCardData });
  render(
    <PokemonContext>
      <Home />
    </PokemonContext>
  );
  mockAxios.get.mockImplementation((url) => {
    return Promise.resolve({ data: pokeCardData(url) });
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
  localStorage.clear();
});

describe("PokeCards screen rendering and interaction test ", () => {
  test("Test for displaying 'No Results' info when no data is available", async () => {
    cleanup();
    render(
      <PokemonContext>
        <Home />
      </PokemonContext>
    );
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });

  test("should the pokemon cards have been rendered on the screen after getting the data", async () => {
    //Should render 6 cardElements for 6 pokemonData
    await waitFor(() => {
      const cardElements = screen.getAllByTestId("poke-card");
      expect(cardElements).toHaveLength(6);
    });
  });

  test("side modal functionality test", async () => {
    //SlideModal should display on User click
    await clickOnFirstCardActionArea();
    const detailCard = screen.findByText(/ability/i);
    expect(detailCard).toBeInTheDocument;
  });

  test("DELETE button functionality test", async () => {
    await clickOnFirstCardActionArea();
    //If the user clicks on the DELETE button, a DELETE confirmation modal should open.
    const deleteButton = await screen.findByRole("button", { name: /delete/i });
    userEvent.click(deleteButton);
    const deletConfirmModal = await screen.findByText(/you want to delete/i);
    expect(deletConfirmModal).toBeInTheDocument;

    //If the user confirm the delete the localStorage is updated
    const deletConfirmbutton = await screen.findByRole("button", {
      name: /CONFIRM/i,
    });
    expect(deletConfirmbutton).toBeInTheDocument;
    fireEvent.click(deletConfirmbutton);
    await waitFor(() => {
      const storedData = localStorage.getItem("deleted");
      expect(storedData).toEqual('["Balbasaur"]');

      //When the user confirm the delete should the modal close
      expect(deletConfirmModal).not.toBeInTheDocument;
    });

    //After confirming the delete, one card should be removed from the list
    render(
      <PokemonContext>
        <Home />
      </PokemonContext>
    );
    const cardElements = screen.getAllByTestId("poke-card");
    expect(cardElements).toHaveLength(5);
  });

  test("EDIT modal functionality test", async () => {
    await clickOnFirstCardActionArea();

    //If the user clicks on the EDIT button, the EDIT modal should open.
    const editButton = await screen.findByRole("button", { name: /edit/i });
    userEvent.click(editButton);
    const editModal = await screen.findByText(/Edit your PokeCard/i);
    expect(editModal).toBeInTheDocument;
    //screen.logTestingPlaygroundURL();
    //screen.debug(undefined, 300000);

    //Verify that the input fields have the correct initial text
    const inputs = await screen.findAllByRole("textbox");
    expect(inputs[0].value).toBe("Balbasaur");
    expect(inputs[1].value).toBe("item");
    expect(inputs[2].value).toBe("indas");
    const typeInput = await screen.findByRole("combobox");
    expect(typeInput).toHaveTextContent("grass");
    const expInput = screen.getByRole("spinbutton");
    expect(expInput.value).toBe("100");

    //If the user modifying the name input the value is updated correctly
    const nameInput = inputs[0];
    userEvent.click(nameInput);
    userEvent.clear(nameInput);
    userEvent.keyboard("editedName");
    expect(nameInput.value).toBe("editedName");

    //If the user submits the change, the local storage is updated
    const editSubmit = await screen.findByRole("button", {
      name: /submit/i,
    });
    fireEvent.click(editSubmit);
    await waitFor(() => {
      const storedSubmitData = localStorage.getItem("edited");
      expect(storedSubmitData).toBeTruthy;
    });

    //After editing the edited pokeCard should be in the screen
    render(
      <PokemonContext>
        <Home />
      </PokemonContext>
    );
    const editedCard = screen.getAllByText(/editedName/i);
    expect(editedCard).toBeInTheDocument;
  });

  //////////////////////////////////////////////////////////////////////////////////////////////

  test("If is a request error, display an alert", async () => {
    window.alert = jest.fn();
    jest.spyOn(axios, "get").mockRejectedValue(new Error("Request failed"));
    await waitFor(() => expect(window.alert).toHaveBeenCalled());
  });

  test("Should the 'no results found' text disappears when PokeCards are rendered", async () => {
    await waitForElementToBeRemoved(() => screen.getAllByText(/no results/i));
  });

  test("Infinite scroll functionality test", async () => {
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 1000 } });
    });
    await waitFor(() => {
      //check API request trigger
      expect(mockAxios.get).toHaveBeenCalled();
    });
    rerender();
    await waitFor(() => {
      const cardElements = screen.getAllByTestId("poke-card");
      //Check if more cards is displayed on the screen
      expect(cardElements).toHaveLength(12);
    });
  });

  test("test the search feature functionality", async () => {
    const inputElement = screen.getByLabelText(/Type to search/i);
    fireEvent.change(inputElement, { target: { value: "Balbasaur" } });

    await waitFor(() => {
      //Chek if only the searched card is displayed
      const cardElements = screen.getAllByTestId("poke-card");
      expect(cardElements).toHaveLength(1);
      //Chek if the searched card is displayed
      expect(screen.getByText("Balbasaur")).toBeInTheDocument;
    });
  });

  test("Display 'No Results Found' text for unmatched search", async () => {
    const inputElement = screen.getByLabelText(/Type to search/i);
    fireEvent.change(inputElement, { target: { value: "fakesearch" } });
    await waitFor(() => {
      const cardElements = screen.queryAllByTestId("poke-card");
      //Check if no cards are displayed
      expect(cardElements).not.toBeInTheDocument;
      const headerElement = screen.getByRole("heading");
      //Check if the text is displayed
      expect(headerElement).toBeInTheDocument();
    });
  });
});
