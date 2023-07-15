import React from "react";
import { connect } from "react-redux";
import {
  updateLightTheme,
  updateDarkTheme,
  clearTheme,
  updateCustomThemeOne,
  updateCustomThemeTwo,
} from "../../../../actions/normalActions";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
const useStyles = withStyles((theme) => ({
 
  grid: {
    width: "auto",
    margin: 0,
  },
  text:{
    fontSize:'1.75rem',
    margin: '0px 16px'
  }
}));
class ThemePicker extends React.Component {
  light = (e) => {
    e.preventDefault();
    this.props.dispatch(clearTheme());
    this.props.dispatch(updateLightTheme("light"));
  };
  dark = (e) => {
    e.preventDefault();
    this.props.dispatch(clearTheme());
    this.props.dispatch(updateDarkTheme("dark"));
  };
  customThemeOne = (e) => {
    e.preventDefault();
    this.props.dispatch(clearTheme());
    this.props.dispatch(updateCustomThemeOne("ThemeOne"));
  };
  customThemeTwo = (e) => {
    e.preventDefault();
    this.props.dispatch(clearTheme());
    this.props.dispatch(updateCustomThemeTwo("ThemeTwo"));
  };
  render() {
    const { classes } = this.props;
    let themeData=this.props.MUItheme;
    let activeDark=themeData.themeType==="dark"?"#8c8080":"transparent";
    let activeLight=themeData.themeType==="light"?"#e2e2e2":"transparent";
    let activeThemeOne=themeData.themeType==="ThemeOne"?"#8c8080":"transparent";
    let activeThemeTwo=themeData.themeType==="ThemeTwo"?"#d2baba":"transparent";
    return (
      <>
        <div >
          <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12} md={12} sm={12}>
          <Typography className={classes.text}>Themes</Typography>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <List>
                <ListItem button onClick={(e) => this.light(e)} style={{textAlign:'center',background:activeLight }}>
                  <Grid container>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#4B275C",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#f5f5f5",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#000000",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#ffffff",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <ListItemText
                        primary={
                          <span style={{ fontSize: "1.25rem" }}>Light</span>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <List>
                <ListItem button onClick={(e) => this.dark(e)} style={{textAlign:'center',background:activeDark }}>
                <Grid container>
                <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#4B275C",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#212121",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#ffffff",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#424242",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <ListItemText
                        primary={
                          <span style={{ fontSize: "1.25rem" }}>Dark</span>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <List>
                <ListItem button onClick={(e) => this.customThemeOne(e)} style={{textAlign:'center',background:activeThemeOne }}>
                <Grid container>
                <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#48435C",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#9792E3",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#ffffff",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#5A5766",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <ListItemText
                        primary={
                          <span style={{ fontSize: "1.25rem" }}>Custom Theme One</span>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
             <Grid item xs={12} md={3} sm={6}>
              <List>
                <ListItem button onClick={(e) => this.customThemeTwo(e)} style={{textAlign:'center',background:activeThemeTwo }}>
                <Grid container>
                <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#17BEBB",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#212121",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#000000",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      <div
                        style={{
                          background: "#FAD8D6",
                          height: 100,
                          border: "1px solid #8c8c8c",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                      <ListItemText
                        primary={
                          <span style={{ fontSize: "1.25rem"}}>Custom Theme Two</span>
                        }
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
function mapStateToProps(store) {
  return {
    MUItheme: store.MUItheme,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(useStyles(ThemePicker));
