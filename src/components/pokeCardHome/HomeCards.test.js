import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import HomeCards from "./HomeCards";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import PokemonContext from "../../context/PokemonContext";

jest.mock("axios");
const mockAxios = axios;

//mock axios request
//spyOn, vs mockfn
//text what is  rendered IMPORTANT!
//slid modal from the right/isnted of the pop up modal
//in the modal delet and edit buttons
//when delet or edit a new modal with ok/cancel buttons
//implememt local storage,
//save the datas in local storage then modify that storage when delete etc
//also unit and integration tesst

const homeCardData = {
  count: 1292,
  next: "pokemon/next20",
  previous: null,
  results: [
    { name: "Balbasaur", url: 0 },
    { name: "Pikachu", url: 1 },
    { name: "Charizard", url: 2 },
    { name: "Blastois", url: 3 },
    { name: "Charmalion", url: 4 },
    { name: "Metwo", url: 5 },
  ],
};

const pokeCardData = (idx) => ({
  id: idx + 1,
  species: { name: "pikachuMocked" },
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

beforeEach(() => {
  render(
    <PokemonContext>
      <HomeCards />
    </PokemonContext>
  );
  jest.spyOn(axios, "get").mockResolvedValue({ data: homeCardData });
  render(
    <PokemonContext>
      <HomeCards />
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
  test("Test for displaying 'No Results' info when no data is available", () => {
    cleanup();
    render(<HomeCards />);
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
      expect(storedData).toEqual("[1]");

      //When the user confirm the delete should the modal close
      expect(deletConfirmModal).not.toBeInTheDocument;
    });

    //After confirming the delete, one card should be removed from the list
    render(
      <PokemonContext>
        <HomeCards />
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
    expect(inputs[0].value).toBe("pikachuMocked");
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
        <HomeCards />
      </PokemonContext>
    );
    const editedCard = screen.getAllByText(/editedName/i);
    expect(editedCard).toBeInTheDocument;
  });
});
