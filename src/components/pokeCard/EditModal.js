import { Box, Card, Modal, TextField, Typography } from "@mui/material";
import BaseButton from "../common/BaseButton";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import useEdit from "../../hooks/useEdit";

export default function EditModal({ openEdit, handleCloseOpenEdit, pokemon }) {
  const {
    currentEditedPokemon,
    setCurrentEditedPokemon,
    handelSubmitEdit,
    disable,
  } = useEdit(pokemon);
  const handleEditEvents = () => {
    handelSubmitEdit();
    handleCloseOpenEdit();
  };

  return (
    <>
      <Modal
        open={openEdit}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Card
          sx={{
            width: 600,
            height: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Edit your PokeCard</Typography>
          <Box
            sx={{
              m: 5,
              width: 450,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextInput
              id="pokemon-name"
              text="Name"
              value={currentEditedPokemon.species.name}
              onChange={(e) =>
                setCurrentEditedPokemon((prev) => ({
                  ...prev,
                  species: { name: e.target.value },
                }))
              }
            />
            <SelectInput
              id="pokemon-type"
              text="Type"
              value={currentEditedPokemon.types[0].type.name}
              onChange={(e) =>
                setCurrentEditedPokemon((prev) => ({
                  ...prev,
                  types: [{ type: { name: e.target.value } }],
                }))
              }
            />
            <TextInput
              id="pokemon-exp"
              text="Experience"
              type="number"
              value={currentEditedPokemon.base_experience}
              onChange={(e) =>
                setCurrentEditedPokemon((prev) => ({
                  ...prev,
                  base_experience: e.target.value,
                }))
              }
            />
            <TextInput
              id="pokemon-item"
              text="Item"
              value={currentEditedPokemon.held_items[0].item.name}
              onChange={(e) =>
                setCurrentEditedPokemon((prev) => ({
                  ...prev,
                  held_items: [{ item: { name: e.target.value } }],
                }))
              }
            />
            <TextInput
              id="pokemon-abilitie"
              text="Ability"
              value={currentEditedPokemon.abilities[0].ability.name}
              onChange={(e) =>
                setCurrentEditedPokemon((prev) => ({
                  ...prev,
                  abilities: [{ ability: { name: e.target.value } }],
                }))
              }
            />
          </Box>
          <Box
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "space-around",
              width: 400,
            }}
          >
            <BaseButton
              text="SUBMIT"
              bgcolor="#29bf12"
              onClick={handleEditEvents}
              disabled={!disable}
            />
            <BaseButton
              text="CANCEL"
              bgcolor="#ffb703"
              onClick={handleCloseOpenEdit}
            />
          </Box>
        </Card>
      </Modal>
    </>
  );
}
