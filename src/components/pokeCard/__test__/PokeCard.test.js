import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokeCard from "../PokeCard";
import useGetPokeIcon from "../../../hooks/useGetPokeIcon";

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

jest.mock("../../pokeCardFavorit/FavoritIcon", () => {
  return () => <div data-testid="mocked-FavoritIconComponent" />;
});

jest.mock("../../../hooks/useGetPokeIcon");

test("poke card and his elements is shown on the screen", () => {
  useGetPokeIcon.mockReturnValue({
    icon: <svg />,
    text: "BUG",
    color: "rgb(255, 0, 0)",
    bgColor: "rgb(255, 0, 0, 0.7)",
  });
  renderComponenet();
  //is the pokekard rendered on the screen
  const cardElement = screen.getByTestId("poke-card");
  expect(cardElement).toBeInTheDocument;
  //screen.debug();
  //is the pokemon avatar rendered on the screen
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveAttribute("alt", "pokemonimg");
  //is the pokemon name rendered corectly on the screen
  const nameElement = screen.getByRole("heading");
  expect(nameElement).toHaveTextContent("Balbasaur");
  //is the pokemon chip rendered, if the type is corect is tested in the typechiptest
  const typeChipElement = screen.getByText(/bug/i);
  expect(typeChipElement).toBeInTheDocument;
});
