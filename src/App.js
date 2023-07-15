import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import EditContent from './components/EditContent/EditContent';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

class App extends React.Component {

  render() {
    const MUItheme = createMuiTheme(this.props.MUItheme.theme);
    const TabRouterChanged=this.props.TabRouterChanged.changedRoute;
    document.body.style.backgroundColor = MUItheme.palette.background.paper;
    return (
      <MuiThemeProvider theme={MUItheme}>
        <div className="App">
        <Switch>
              <Route
                exact
                path={`/`}
                render={(props) => (
                    <Login {...props} />
                )}
              /> <Route
              exact
              path={`/signup`}
              render={(props) => (
                  <SignUp {...props} />
              )}
            />
                <Route
                exact
                path={TabRouterChanged}
                render={(props) => (
                    <Header {...props} />
                )}
              />
 <Route
                exact
                path={`/editBlogs`}
                render={(props) => (
                    <EditContent {...props} />
                )}
              />
              <Redirect exact from={`/logout`} to={`/`} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(store) {
  return {
    MUItheme: store.MUItheme,
    TabRouterChanged:store.TabRouterChanged
  };
}
export default connect(mapStateToProps)(App);
