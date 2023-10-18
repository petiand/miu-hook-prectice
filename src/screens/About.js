import { Box, Container, Typography, createStyles } from "@mui/material";
import BackButton from "../components/common/BackButton";

export default function About() {
  return (
    <>
      <BackButton to={"/"} />
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          p: 5,
          height: "vh",
        }}
      >
        <Typography variant="h4"> Short description of the App</Typography>
        <Box sx={{ textAlign: "left", mt: 3 }}>
          <Typography style={styles.text} variant="h6">
            The PokeCodex was built to practice react basic hooks and to
            familiarize with the MUI.
          </Typography>
          <ul>
            <li>customized and reusable components</li>
            <li>styling and effects with MUI</li>
            <li>
              using basic react hooks (useState, useEffect, useRef, useMemo,
              useCallback, useContext)
            </li>
            <li>sharing logic with custom hooks</li>
            <li>native global state management with context/useContext</li>
            <li>data fetching from an API</li>
            <li>
              simple page navigation with API endpoints and React Router library
            </li>
            <li>conditional rendering</li>
            <li>state hoisting</li>
            <li>js array methods</li>
            <li>rendering arrays with map method</li>
            <li>props destruction, spread</li>
            <li>more feature</li>
          </ul>
        </Box>
      </Container>
    </>
  );
}

const styles = createStyles({
  text: {
    textAlign: "center",
  },
  pokebox: {},
});
