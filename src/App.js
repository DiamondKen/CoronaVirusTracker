import React from "react";
import NavBar from "./NavBar";
import { Container, Box} from "@material-ui/core";
import MyResponsiveLine from "./Chart.js";
import CenterGrid from "./latestGrid.js";
import "./App.css";

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
        <Box mt={3} height="30rem">
          <MyResponsiveLine />
        </Box>
      </Container>
    </div>
  );
}

export default App;
