import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FiUser,FiLock } from 'react-icons/fi';
import loginBG from '../../images/login-bg.jpg';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useSelector,useDispatch } from 'react-redux';
import  {updateTabsRouter} from '../../actions/normalActions';
function Copyright(props) {
    const{className}=props;
  return (
    <Typography variant="body2" align="center" className={className}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        dev - era
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${loginBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:'white',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  paperContent:{

    backgroundColor:'white',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color:'white',
    height:75,
    width:75
  },
  icon:{
      fontSize:75
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& .MuiInputLabel-animated , .MuiInput-root , .MuiSelect-icon": {
        color: 'black',
      },
      "& .MuiInput-underline:before , .MuiInput-underline:after": {
        borderBottom: `1px solid black`,
      },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  colortext:{
      color:'black'
  }
}));

export default function Login(props) {
  const classes = useStyles();
const TabRouterChanged = useSelector(store => store.TabRouterChanged.changedRoute);
let url=TabRouterChanged.split('/')[2];

const dispatch = useDispatch();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={8} className={classes.image} />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square className={classes.paperContent}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SupervisedUserCircle className={classes.icon}/>
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.colortext}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiUser />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiLock />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>dispatch(updateTabsRouter(url,props))}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} >
                <Link href="#" variant="body2" className={classes.colortext}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} sm={12}  md={6}>
                <Link href="/signup" variant="body2" className={classes.colortext}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright className={classes.colortext}/>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}