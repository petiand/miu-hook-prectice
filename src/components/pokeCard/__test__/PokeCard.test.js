import { render, screen } from "@testing-library/react";
import PokeCard from "../PokeCard";
import useGetPokeIcon from "../../../hooks/useGetPokeIcon";

//avoid mocking the UI

const renderComponenet = () => {
  return render(
    <PokeCard
      pokemonId="1"
      name="Balbasaur"
      type="grass"
      ability="indas"
      height="100"
      weight="50"
    />
  );
};

jest.mock("../../../hooks/usePokemon", () => {
  return {
    usePokemon: () => ({
      favoritList: [],
      setFavoritList: jest.fn(),
    }),
  };
});

jest.mock("../../../hooks/useGetPokeIcon");

test("PokeCard and its elements are displayed on the screen", () => {
  useGetPokeIcon.mockReturnValue({
    icon: <svg />,
    text: "BUG",
    color: "rgb(255, 0, 0)",
    bgColor: "rgb(255, 0, 0, 0.7)",
  });

  renderComponenet();
  //Is PokeCard rendered on the screen
  const cardElement = screen.getByTestId("poke-card");
  expect(cardElement).toBeInTheDocument;
  //Is Pokemon avatar rendered on the screen
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveAttribute("alt", "pokemonimg");
  //Is the Pokemon name rendered corectly on the screen
  const nameElement = screen.getByRole("heading");
  expect(nameElement).toHaveTextContent("Balbasaur");
  //Is Pokemon chip rendered with the correct type
  const typeChipElement = screen.getByText(/BUG/i);
  expect(typeChipElement).toBeInTheDocument;
});
