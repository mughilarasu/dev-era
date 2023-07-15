// export function clearLoginError(dispatch) {
//     return { type: "CLEAR_LOGIN_FAILED_ERROR" };
//   }
  
  export function updateLightTheme(light) {
    return { type: "UPDATE_LIGHT_THEME", payload: light };
  }

  export function updateDarkTheme(Dark) {
    return { type: "UPDATE_DARK_THEME", payload: Dark };
  }

  export function updateCustomThemeOne(customOne) {
    return { type: "UPDATE_CUSTOM_ONE_THEME", payload: customOne };
  }

  export function updateCustomThemeTwo(customTwo) {
    return { type: "UPDATE_CUSTOM_TWO_THEME", payload: customTwo };
  }

  export function clearTheme(dispatch) {
    return { type: "CLEAR_ALL_THEME" };
  }

  export function updateTabsRouter(router,props) {
    props.history.push(`/home/${router}`)
    return { type: "UPDATE_TAB_ROUTER", payload: router };
  }

  export function clearTabRouter(dispatch) {
    return { type: "CLEAR_TAB_ROUTER" };
  }
  