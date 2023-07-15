import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ThemePicker from "./ThemePicker";
import Profile from './Profile';
const useStyles = withStyles((theme) => ({
  appBar: {
    position: "relative",
    background: theme.palette.primary.main,
  },
  title: {
    flex: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

class Settings extends React.Component {
  render() {
    const { classes, openSettings, handleClose } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={openSettings}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Settings
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          
          <Profile {...this.props}/>
            <ThemePicker />
        </Dialog>
      </div>
    );
  }
}

export default useStyles(Settings);
