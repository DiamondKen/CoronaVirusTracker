import React, { useEffect, useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  useTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { blue, green, red, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // backgroundColor:
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: grey,
    },
  });
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.Global);
        },
        (error) => {
          setIsLoaded(true);
          setData("unable to fetch data");
          setError(error);
        }
      );
  }, []);

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item>
          <Paper elevation={3} className={classes.paper}>
            <Typography display="inline-block" color="error" variant="h5">
              Worldwide Total Confirmed
            </Typography>

            <Typography display="inline-block" color="error" variant="h4">
              {data.TotalConfirmed}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Paper elevation={3} className={classes.paper}>
              <Typography
                display="inline-block"
                color="textSecondary"
                variant="h5"
              >
                Worldwide Total Death
              </Typography>
              <Typography
                display="inline-block"
                color="textSecondary"
                variant="h4"
              >
                {data.TotalDeaths}
              </Typography>
            </Paper>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Paper elevation={3} className={classes.paper}>
              <Typography display="inline-block" color="primary" variant="h5">
                Worldwide Total Recovered
              </Typography>

              <Typography display="inline-block" color="primary" variant="h4">
                {data.TotalRecovered}
              </Typography>
            </Paper>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default CenteredGrid;
