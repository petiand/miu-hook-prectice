import { Link, Typography } from "@mui/material";

const Wrapper = ({ children, url }) => {
  if (url) {
    return <Link href={url}>{children}</Link>;
  }
  return (
    <Typography variant="h6" sx={{ fontWeight: "bold", ml: "4px" }}>
      {children}
    </Typography>
  );
};

export default function ModalItem({ value, label, url }) {
  return (
    <Typography
      variant="h6"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "row",
        fontWeight: "regular",
      }}
    >
      {label}:<Wrapper url={url}>{value}</Wrapper>
    </Typography>
  );
}
