import Switch from "@mui/material/Switch";
import { Stack, Typography } from "@mui/material";
import { usePokemon } from "../../hooks/usePokemon";
import { useCallback } from "react";

export default function ToggleView() {
  const { setIsTable } = usePokemon();

  const handleToggel = useCallback(() => {
    setIsTable((prev) => !prev);
  }, [setIsTable]);
  return (
    <Stack direction="row" alignItems="center" sx={{ ml: 2 }}>
      <Typography sx={{ color: "#f2e8cf" }}>Card</Typography>
      <Switch
        color="default"
        sx={{
          "& .MuiSwitch-track": {
            backgroundColor: "#f2e8cf",
          },
        }}
        onChange={handleToggel}
      />
      <Typography sx={{ color: "#f2e8cf" }}>Table</Typography>
    </Stack>
  );
}
