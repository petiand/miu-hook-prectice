import {
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CircularProgress,
} from "@mui/material";

//import PokeCardDetail from "./PokeCardDetail";
import AvatarImg from "./AvatarImg";
import PokeCardContent from "./PokeCardContent";
import FavoritIcon from "../pokeCardFavorit/FavoritIcon";
import useGetPokeIcon from "../../hooks/useGetPokeIcon";
import PokeCardDetailSlide from "./PokeCardDetailSlide";
import DeletConfirmModal from "./DeletConfirmModal";
import EditModal from "./EditModal";
//import { useGetPokeIconOOP } from "../../hooks/useGetPokeIconOOP";

export default function PokeCard({
  pokemon,
  pokemonId,
  name,
  type,
  ability,
  height,
  weight,
  handleClickOpenDetail,
  isLoading,
  handleCloseDetail,
  openDetail,
  openDeletConfirmModal,
  handleClickOpenDeletConfirmModal,
  handleCloseOpenDeletConfirmModal,
  openEdit,
  handleClickOpenEdit,
  handleCloseOpenEdit,
  handleDelete,
}) {
  const color = useGetPokeIcon(type);

  return (
    <Grid
      item
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      xs={6}
      sm={4}
      lg={3}
    >
      {pokemonId && (
        <Card
          data-testid="poke-card"
          variant="outlined"
          sx={{
            border: "none",
            width: {
              xs: "150px",
              sm: "200px",
              md: "200px",
              lg: "220px",
              xl: "250px",
            },
            height: { xs: "250px", sm: "330px", md: "330px", lg: "330px" },
            bgcolor: color?.bgColor,
            borderRadius: "10px",
            ":hover": {
              boxShadow: "0 0 100px",
              color: color?.color,
              scale: "1.1",
            },
          }}
        >
          <CardActionArea
            data-testid="action-area"
            onClick={handleClickOpenDetail}
          >
            <FavoritIcon
              id={pokemonId}
              name={name}
              type={type}
              ability={ability}
              height={height}
              weight={weight}
              position="absolute"
              right="8px"
            />
            {isLoading ? (
              <CircularProgress sx={{ mt: 15 }} />
            ) : (
              <>
                <CardContent
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  {pokemonId && <AvatarImg id={pokemonId} />}
                </CardContent>
                <PokeCardContent name={name} type={type} />
              </>
            )}
          </CardActionArea>
        </Card>
      )}
      {!isLoading && pokemon && (
        <>
          <PokeCardDetailSlide
            open={openDetail}
            pokemon={pokemon}
            handleClose={handleCloseDetail}
            handleClickOpenDeletConfirmModal={handleClickOpenDeletConfirmModal}
            handleClickOpenEdit={handleClickOpenEdit}
          />
          <DeletConfirmModal
            open={openDeletConfirmModal}
            handleCloseOpenDeletConfirmModal={handleCloseOpenDeletConfirmModal}
            handleDelete={handleDelete}
          />
          <EditModal
            pokemon={pokemon}
            openEdit={openEdit}
            handleCloseOpenEdit={handleCloseOpenEdit}
          />
        </>
      )}
    </Grid>
  );
}
