import { CircularProgress, Paper } from "@mui/material";
import { useCallback, useState } from "react";

export default function AvatarImg({ id }) {
  const [imgIsLoading, setImgIsLoading] = useState(true);

  const findUrl = useCallback(() => {
    if (isNaN(id)) {
      return id;
    } else {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    }
  }, [id]);
  const imageUrl = findUrl();

  const onLoad = useCallback(() => setImgIsLoading(false), []);

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        width: 170,
        height: 170,
        //  bgcolor:"#F4D590",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {imgIsLoading && (
        <CircularProgress sx={{ zIndex: 1, position: "absolute" }} />
      )}
      {imageUrl && (
        <img
          src={imageUrl}
          style={{ height: 115, width: 115 }}
          alt="pokemonimg"
          onLoad={onLoad}
        />
      )}
    </Paper>
  );
}
