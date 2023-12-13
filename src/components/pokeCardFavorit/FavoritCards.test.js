import { render, screen, waitFor } from "@testing-library/react";
import FavocirtCards from "./FavoritCards";

jest.mock("../../hooks/usePokemon", () => {
  return {
    usePokemon: () => ({
      favoritList: [
        {
          ability: "blaze",
          height: 6,
          id: 4,
          name: "favoritpokemon",
          type: "fire",
          weight: 85,
        },
      ],
    }),
  };
});

test("Should displayed the favorit cards on the screen", async () => {
  render(<FavocirtCards />);
  await waitFor(() => {
    const favoritCard = screen.getByText("Favoritpokemon");
    expect(favoritCard).toBeInTheDocument;
  });
});
//to be privet  not referecing all true the aplication, just get the item with the get method from my abstraction
