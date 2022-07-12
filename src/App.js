import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import { Stack, ThemeProvider, Box, createTheme } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <NavBar />
        <Stack direction={"row"} spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
