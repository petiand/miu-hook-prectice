import { Box, TextField, Typography } from "@mui/material";

export default function TextInput({ id, text, type, value, onChange }) {
  return (
    <>
      <Box
        sx={{
          my: 2,
          maxWidth: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mr: 1, fontWeight: "bold" }}>{text}: </Typography>
        <TextField
          id={id}
          type={type}
          variant="standard"
          placeholder="No data"
          value={value}
          onChange={onChange}
        />
      </Box>
    </>
  );
}
