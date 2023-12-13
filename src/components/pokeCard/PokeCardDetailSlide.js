import { Box, Card, Modal, Slide, Typography } from "@mui/material";
import AvatarImg from "./AvatarImg";
import PokeBallIcon from "../../assets/images/icons/PokeBallIcon";
import BaseButton from "../common/BaseButton";
import ModalItem from "../common/ModalItem";

export default function PokeCardDetailSlide({
  pokemon,
  open,
  handleClose,
  handleClickOpenDeletConfirmModal,
  handleClickOpenEdit,
}) {
  return (
    <>
      <Modal
        sx={{ backdropFilter: "blur(3px)" }}
        open={open}
        onClose={handleClose}
      >
        <Slide direction="left" in={open}>
          <Card
            sx={{
              height: "100vh",
              width: 300,
              maxWidth: "60%",
              position: "fixed",
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                p: 2,
                mt: 5,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {pokemon?.species ? pokemon.species.name : ""}
            </Typography>
            <AvatarImg id={pokemon.sprites.front_default} />
            <ModalItem
              value={pokemon.base_experience}
              label="Base Experience"
            />
            <ModalItem
              value={
                pokemon?.held_items && pokemon.held_items[0]
                  ? pokemon.held_items[0]?.item.name
                  : "No held items"
              }
              label="Held Items"
            />
            <ModalItem
              value={
                pokemon?.abilities && pokemon.abilities[0]
                  ? pokemon.abilities[0].ability.name
                  : "No ability"
              }
              label="Ability"
            />
            <ModalItem
              value={<PokeBallIcon />}
              label="For more info"
              url={pokemon?.species?.url}
            />

            <AvatarImg id={pokemon.sprites.back_default} />
            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "space-around",
                width: 250,
              }}
            >
              <BaseButton
                text="EDIT"
                bgcolor="#ffb703"
                onClick={handleClickOpenEdit}
              />
              <BaseButton
                text="DELETE"
                bgcolor="#e63946"
                onClick={handleClickOpenDeletConfirmModal}
              />
            </Box>
          </Card>
        </Slide>
      </Modal>
    </>
  );
}
