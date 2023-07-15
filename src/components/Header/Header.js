import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { FiCalendar, FiSettings, FiMoreVertical} from "react-icons/fi";
import Fab from "@material-ui/core/Fab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import logo from "../../images/logo.svg";
import HeaderTabs from "../HeaderTabs/HeaderTabs";
import HeaderClock from "./HeaderClock";
import Settings from "./UserMenu/Settings/Settings";
import HeaderStyles from "../CommonStyles/HeaderStyles";
import UserMenu from './UserMenu/UserMenu';
const names = [
  "All",
  "Technology",
  "Health",
  "Science",
  "Business",
  "Culture",
  "Food",
  "Marketing",
  "Politics",
  "Engineering",
  "Style"
];
class Header extends React.Component {
  state = {
    mobileMoreAnchorEl: null,
    topicName: ["All"],
    openSettings: false,
  };

  componentDidUpdate(prevProp, prevState) {
    this.state.topicName.length === 0 && this.setState({ topicName: ["All"] });
  }
  handleChange = (event) => {
    let dataSelected =
      this.state.topicName.length > 0
        ? event.target.value.filter((x) => x !== "All")
        : names;
    this.setState({ topicName: dataSelected });
  };
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  handleClickOpen = () => {
    this.setState({ openSettings: true });
  };

  handleClose = () => {
    this.setState({ openSettings: false });
  };
  render() {
    const { classes } = this.props;
    const { mobileMoreAnchorEl, openSettings } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
   
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
        className={classes.menuMobile}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <FiCalendar />
          </IconButton>
          <HeaderClock />
        </MenuItem>

        <MenuItem>
          <IconButton
            aria-label="show 11 new notifications"
            color="inherit"
            onClick={this.handleClickOpen}
          >
            <FiSettings />
          </IconButton>
          <p>Settings</p>
        </MenuItem>
      </Menu>
    );
    const ScrollTop = (props) => {
      const { children, window, classes } = props;
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
      });
      const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
          "#back-to-top-anchor"
        );

        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      };
      return (
        <Zoom in={trigger}>
          <div
            onClick={handleClick}
            role="presentation"
            className={classes.root}
          >
            {children}
          </div>
        </Zoom>
      );
    };

    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      window: PropTypes.func,
    };

    return (
      <>
        <div className={classes.grow}>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <img src={logo} alt="logo" className={classes.logo} />
              <Typography className={classes.title} variant="h6" noWrap>
                Dev-Era
              </Typography>
              <div className={classes.grow} />

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={classes.sectionDesktop}>
                <MenuItem>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <FiCalendar />
                  </IconButton>
                  <HeaderClock />
                </MenuItem>
               
                
        <UserMenu handleClickOpen={this.handleClickOpen} {...this.props}/>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <FiMoreVertical />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>

        <HeaderTabs names={names} topicName={this.state.topicName} {...this.props}/>
        <Settings handleClose={this.handleClose} openSettings={openSettings} 
                  names={names}
                  topicName={this.state.topicName}
                  handleChange={this.handleChange}/>
        <ScrollTop {...this.props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </>
    );
  }
}

export default HeaderStyles(Header);
