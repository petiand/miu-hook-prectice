import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import HomeCards from "./HomeCards";
import userEvent from "@testing-library/user-event";
import axios from "axios";

//mock axios request
//spyOn, vs mockfn
//text what is  rendered IMPORTANT!

jest.mock("../../hooks/usePokemon", () => {
  return {
    usePokemon: () => ({
      favoritList: [],
      setFavoritList: jest.fn(),
    }),
  };
});

const homeCardData = {
  count: 1292,
  next: "pokemon/next20",
  previous: null,
  results: [
    { name: "Balbasaur", url: "pokemon/1" },
    { name: "Pikachu", url: "pokemon/1" },
    { name: "Charizard", url: "pokemon/3" },
    { name: "Blastois", url: "pokemon/4" },
    { name: "Charmalion", url: "pokemon/5" },
    { name: "Metwo", url: "pokemon/6" },
  ],
};

const pokeCardData = {
  id: "1",
  species: { name: "balbasaur" },
  types: [{ type: { name: "grass" } }],
  abilities: [{ ability: { name: "indas" } }],
  height: "100",
  weight: "50",
};

beforeEach(() => {
  render(<HomeCards />);
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("PokeCards screen rendering and interaction test ", () => {
  test("Test for displaying 'No Results' info when no data is available", () => {
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });

  test("should the pokemon cards have been rendered on the screen after getting the data", async () => {
    const useGetPokemonSpy = jest.spyOn(axios, "get");
    useGetPokemonSpy.mockResolvedValue({ data: homeCardData });
    //rerender the component
    render(<HomeCards />);
    const useGetPokeCardSpy = jest.spyOn(axios, "get");
    useGetPokeCardSpy.mockResolvedValue({ data: pokeCardData });
    //Should render 6 cardElements for 6 pokemonData
    await waitFor(() => {
      const cardElements = screen.getAllByTestId("poke-card");
      expect(cardElements).toHaveLength(6);
    });
    //Popup should display on User click
    const cardActionAreas = await screen.findAllByTestId("action-area");
    const cardActionArea = cardActionAreas[0];
    userEvent.click(cardActionArea);
    const detailCard = screen.findByText(/click me/i);
    expect(detailCard).toBeInTheDocument;
  });
});

//slid modal from the right/isnted of the pop up modal
//in the modal delet and edit buttons
//when delet or edit a new modal with ok/cancel buttons
//implememt local storage,
//save the datas in local storage then modify that storage when delete etc
//also unit and integration tesst
