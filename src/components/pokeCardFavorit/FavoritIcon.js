import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useFavorit from "../../hooks/useFavorit";

export default function FavoritIcon({
  id,
  name,
  type,
  ability,
  height,
  weight,
  ...restProps
}) {
  const [onFavorit, isFavorit] = useFavorit(
    id,
    name,
    type,
    ability,
    height,
    weight
  );

  return (
    <IconButton
      // onMouseDown={event => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        // event.preventDefault();
        onFavorit();
      }}
      sx={{ ...restProps }}
    >
      {isFavorit ? (
        <StarIcon style={{ color: "#fff220" }} />
      ) : (
        <StarBorderIcon style={{ color: "#fff220" }} />
      )}
    </IconButton>
  );
}
