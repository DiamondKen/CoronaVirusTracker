import React from "react";
import NavBar from "./NavBar";
import { Container, Box, Grid, Paper } from "@material-ui/core";
import MyResponsiveLine from "./Chart.js";
import CenterGrid from "./latestGrid.js";
import "./App.css";

import datalol from "./data.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container mt={1} maxWidth="lg">
        <Box mt={2}>
          <CenterGrid />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box mt={3} height="800px">
          <MyResponsiveLine data={datalol} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
