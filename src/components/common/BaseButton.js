import { Button } from "@mui/material";

export default function BaseButton({
  text,
  onClick,
  href,
  disabled,
  ...restProps
}) {
  return (
    <Button
      disabled={disabled}
      variant="solid"
      onClick={onClick}
      sx={{
        border: "none",
        borderRadius: 5,
        ...restProps,
        color: "whitesmoke",
        ":hover": {
          scale: "1.1",
          ...restProps,
        },
      }}
    >
      {text}
    </Button>
  );
}
