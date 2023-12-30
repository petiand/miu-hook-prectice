import { TextField } from "@mui/material";
import { useState, useRef } from "react";

export default function CustomCell({ value }) {
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <TextField
      variant="standard"
      InputProps={{ disableUnderline: true }}
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
    />
  );
}
