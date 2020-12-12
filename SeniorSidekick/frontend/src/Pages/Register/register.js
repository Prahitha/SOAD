import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Senior Sunshine
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.northpennymca.org/wp-content/uploads/2017/02/Helping-Older-Adult.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      username: '',
      email : '',
      password: '',
      volunteer_age: '',
      phone_no: '',
      availability: '',
      services_available: '',
      address_line1: '',
      address_line2: '',
      area: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/services/")
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let servicesFromApi = data.map(service => {
        return {value: service.name, display: service.name}
      });
      this.setState({
        services: [{value: '', display: '(Select the service)'}].concat(servicesFromApi)
      });
    }).catch(error => {
      console.log(error);
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    var body = this.state
    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(body)
      }).then(function(response) {
        console.log(body);
        console.log(response);
        return response.json();
    });

    event.preventDefault();
  }

  render() {
    const { username, email, password, volunteer_age, phone_no, availability, services_available, address_line1, address_line2, area, city, state, country, pincode } = this.state;
    const { classes } = this.props;

      return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="username"
                  value={username}
                  onChange={this.handleChange}
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                </Grid>
                <Grid container justify="space-between" alignContent="stretch">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="re-enter password"
                  label="Re-enter Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <select value={availability}
                onChange={e => this.setState({availability: JSON.parse(e.target.value)})}>
                <option value={true}>
                  Available
                </option>
                <option value={false}>
                  Busy
                </option>
              </select>
                </Grid>
                <Grid container justify="space-between" alignContent="stretch">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="volunteer_age"
                  label="Age"
                  type="number"
                  value={volunteer_age}
                  onChange={this.handleChange}
                  id="volunteer_age"
                  autoComplete="volunteer_age"
                />
                <select className={classes.services} value={services_available}
                onChange={e => this.setState({services_available: e.target.value, validationError: e.target.value === "" ? "You must select a service" : ""})}>
                {this.state.services.map((service) => 
                <option key={service.value} value={service.value}>
                  {service.display}
                </option>)}
              </select>
                </Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="address_line1"
                  label="Address Line 1"
                  type="text"
                  value={address_line1}
                  onChange={this.handleChange}
                  id="address_line1"
                  autoComplete="address_line1"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="address_line2"
                  label="Address Line 2"
                  type="text"
                  value={address_line2}
                  onChange={this.handleChange}
                  id="address_line2"
                  autoComplete="address_line2"
                />
                <Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="area"
                  label="Area"
                  type="text"
                  value={area}
                  onChange={this.handleChange}
                  id="area"
                  autoComplete="area"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="city"
                  label="City"
                  type="text"
                  value={city}
                  onChange={this.handleChange}
                  id="city"
                  autoComplete="city"
                />
                </Grid>
                <Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="state"
                  label="State"
                  type="text"
                  value={state}
                  onChange={this.handleChange}
                  id="state"
                  autoComplete="state"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="country"
                  label="Country"
                  type="text"
                  value={country}
                  onChange={this.handleChange}
                  id="country"
                  autoComplete="country"
                />
                </Grid>
                <Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="pincode"
                  label="Pincode"
                  type="text"
                  value={pincode}
                  onChange={this.handleChange}
                  id="pincode"
                  autoComplete="pincode"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="phone_no"
                  label="Phone Number"
                  type="number"
                  value={phone_no}
                  onChange={this.handleChange}
                  id="phone_no"
                  autoComplete="phone_number"
                />
                </Grid>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                    <Link href="/login" variant="body2">
                      {"Already have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
  );
  }
}

export default withStyles(useStyles)(SignIn);