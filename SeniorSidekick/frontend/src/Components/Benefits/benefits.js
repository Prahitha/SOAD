import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from '@material-ui/icons/Error';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Benefits() {
  const classes = useStyles();

  return (
    <Container style={{backgroundColor: "#efeaf0"}} className={classes.control}>
    <Grid container className={classes.root} spacing={3} style={{margin: "3% 0"}}>
      <Grid item xs={12}>
        <Grid container justify="space-around" spacing={3}>
          <Grid container direction="column" justify="center" alignItems="center" xs={3} >
              <ErrorIcon fontSize="large" color="primary"/>
              <Typography variant="h3">
                  Goal
              </Typography>
              <Typography variant="body2" align="center" style={{fontWeight: "500"}}>
                  Connect elderly with young adults. Should add some more content in this part
              </Typography>
          </Grid>
          <Grid xs={3} container direction="column" justify="center" alignItems="center" >
              <EmojiEmotionsIcon fontSize="large" color="primary"/>
              <Typography variant="h3">
                  Interactive
              </Typography>
              <Typography variant="body2" align="center" style={{fontWeight: "500"}}>
                  User-friendly UI to make it accessible and easy for the seniors to interact with the website
              </Typography>
          </Grid>
          <Grid xs={3} container direction="column" justify="center" alignItems="center" >
              <SignalCellularAltIcon fontSize="large" color="primary"/>
              <Typography variant="h3">
                  Connectivity
              </Typography>
              <Typography variant="body2" align="center" style={{fontWeight: "500"}}>
                 Help foster the connectivity and sharing of meaningful experiences
                </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Paper style={{backgroundColor: "#63326E"}} variant="outlined" elevation={2}>
    <Grid container direction="column" justify="center" alignItems="center" xs={4} style={{margin: "5% 33%"}} >
        <Typography variant="body2" style={{fontSize: "20px", fontWeight: "500", marginBottom: "2%"}}>
            SOLUTION
        </Typography>
        <Typography variant="h3" style={{color: "#EFBC9B"}}>
            Unlock the Potential
        </Typography>
        <Typography variant="body2" align="center" style={{fontWeight: "500"}}>
            A website that connects seniors with young volunteers to 
            help them with their daily tasks, activities and also have 
            a buddy to talk to when they want company
        </Typography>
    </Grid>
    </Paper>
    </Container>
  );
}
