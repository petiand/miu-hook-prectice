import { CircularProgress, Paper } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

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

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = imageUrl;

  //   const handleLoad = () => {
  //     setImgIsLoading(false);
  //   };

  //   img.addEventListener("load", handleLoad);

  //   return () => {
  //     // Cleanup: Remove the event listener and cancel the image request if it hasn't loaded
  //     img.removeEventListener("load", handleLoad);

  //     if (!imgIsLoading) {
  //       img.src = ""; // Cancelling the image request
  //     }
  //   };
  // }, [imageUrl, imgIsLoading]);

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
