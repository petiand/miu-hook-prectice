import React, { useCallback, useState } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import PokeCard from "../pokeCard/PokeCard";
import { usePokemon } from "../../hooks/usePokemon";

export default function PokeCardContainer({ url }) {
  const [pokemon, isLoading] = useGetPokemon({ url: url });

  const { deletedPokemonIds, setDeletedPokemonIds } = usePokemon();

  const { editedPokemons } = usePokemon();

  //PokeCardDetailSlide
  const [openDetail, setopenDetail] = useState(false);

  const handleClickOpenDetail = useCallback(() => {
    setopenDetail(true);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setopenDetail(false);
  }, []);

  //DeletConfirmModal
  const [openDeletConfirmModal, setopenDeletConfirmModal] = useState(false);

  const handleClickOpenDeletConfirmModal = useCallback(() => {
    setopenDeletConfirmModal(true);
  }, []);

  const handleCloseOpenDeletConfirmModal = useCallback(() => {
    setopenDeletConfirmModal(false);
  }, []);

  const handleDelete = () => {
    if (pokemon?.id) {
      setDeletedPokemonIds((prev) => [...prev, pokemon?.id]);
      setopenDeletConfirmModal(false);
      setopenDetail(false);
    }
  };

  //EditModal
  const [openEdit, setopenEdit] = useState(false);

  const handleClickOpenEdit = useCallback(() => {
    setopenEdit(true);
  }, []);

  const handleCloseOpenEdit = useCallback(() => {
    setopenEdit(false);
  }, []);

  const usedPokemon =
    editedPokemons.find((i) => i.id === pokemon?.id) || pokemon;

  return (
    <>
      {usedPokemon && !deletedPokemonIds.includes(usedPokemon?.id) && (
        <PokeCard
          pokemon={usedPokemon}
          pokemonId={usedPokemon.id}
          name={usedPokemon?.species?.name || ""}
          type={usedPokemon?.types ? usedPokemon.types[0].type.name : ""}
          ability={
            usedPokemon?.abilities ? usedPokemon.abilities[0].ability.name : ""
          }
          height={usedPokemon.height}
          weight={usedPokemon.weight}
          handleClickOpenDetail={handleClickOpenDetail}
          isLoading={isLoading}
          handleCloseDetail={handleCloseDetail}
          openDetail={openDetail}
          openDeletConfirmModal={openDeletConfirmModal}
          handleClickOpenDeletConfirmModal={handleClickOpenDeletConfirmModal}
          handleCloseOpenDeletConfirmModal={handleCloseOpenDeletConfirmModal}
          openEdit={openEdit}
          handleClickOpenEdit={handleClickOpenEdit}
          handleCloseOpenEdit={handleCloseOpenEdit}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
