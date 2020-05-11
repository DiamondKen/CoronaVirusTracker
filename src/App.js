import React from "react";
import NavBar from "./NavBar";
import { Container, Box, Grid, Paper } from "@material-ui/core";
import MyResponsiveLine from "./Chart.js";
import CenterGrid from "./latestGrid.js";
import "./App.css";

import data from "./data.js";

function App() {
  console.log(data);
  return (
    <div className="App">
      <NavBar />
      <Container mt={1} maxWidth="lg">
        <Box mt={2}>
          <CenterGrid />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box mt={3} height="30rem">
          <MyResponsiveLine data={data} >

          </MyResponsiveLine>
        </Box>
      </Container>
    </div>
  );
}

export default App;
