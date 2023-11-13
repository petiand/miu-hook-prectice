import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { poketypes } from "./helper";

export default function SelectInput({ id, text, value, onChange }) {
  const items = poketypes;
  return (
    <>
      <Box
        sx={{
          mt: 1,
          mb: 2,
          maxWidth: 200,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Typography sx={{ mr: 1, fontWeight: "bold" }}>{text}: </Typography>
        <TextField
          id={id}
          select
          value={value}
          onChange={onChange}
          variant="standard"
          sx={{
            width: 200,
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.lable}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
}
