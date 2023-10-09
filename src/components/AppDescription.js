import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import {Link as RouterLink } from 'react-router-dom'

export default function AppDescription() {

    const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  }

  console.log(scrollTop)

    return (
        <>
        <Button
            component={RouterLink} to="/"
            variant="outlined"
            sx={{
                mt:10, 
                borderColor:"#003049", 
                color:"#003049", 
                ml:10
                }}
        >
         back   
        </Button>
        <Container 
            onScroll={handleScroll}
            maxWidth="md" 
            sx={{ 
                textAlign:"center", 
                bgcolor:"#fdf0d5", 
                p:5, 
                height:"vh"
            }}
        >
            <Typography 
            variant="h4"> Short description of the App</Typography>
            <Box sx={{textAlign:"left", mt:3}}>
                <Typography variant="h6"> 
                The PokeCodex was built to practice react basic hooks and to familiarize with the MUI.
                </Typography>
                <ul>
                    <li>customized and reusable components</li>
                    <li>styling and effects with MUI</li>
                    <li>using basic react hooks (useState, useEffect, useRef, useMemo, useCallback, useContext)</li>
                    <li>sharing logic with custom hooks</li>
                    <li>native global state management with context/useContext</li>
                    <li>data fetching from an API</li>
                    <li>simple page navigation with API endpoints and React Router library</li>
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
    )
}