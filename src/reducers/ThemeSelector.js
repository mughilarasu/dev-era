const font = "'Lato', sans-serif";
const getThemeSelectorDataReducer = (
  MUItheme = localStorage.getItem("theme") === null
    ? {
        appbar: "#4B275C",
        tabbar: "#f5f5f5",
        text: "#000000",
        background: "#ffffff",
        theme: {
          palette: {
            type: "light",
          },
          typography: {
            useNextVariants: true,
            fontFamily: font,
          },
        },
      }
    : JSON.parse(localStorage.getItem("theme")),
  action
) => {
  let newTheme;
  switch (action.type) {
    case "UPDATE_LIGHT_THEME":
      newTheme = {
        appbar: "#4B275C",
        tabbar: "#f5f5f5",
        text: "#000000",
        background: "#ffffff",
        themeType: action.payload,
        theme: {
          palette: {
            type: action.payload,
            primary: {
              main: "#4B275C",
            },
            text: {
              primary: "#000000",
            },
          },
          typography: {
            useNextVariants: true,
            fontFamily: font,
          },
        },
      };
      localStorage.setItem("theme", JSON.stringify(newTheme));
      break;

    case "UPDATE_DARK_THEME":
      newTheme = {
        appbar: "#4B275C",
        tabbar: "#212121",
        text: "#ffffff",
        background: "#424242",
        themeType: action.payload,
        theme: {
          palette: {
            type: action.payload,
            primary: {
              main: "#4B275C",
            },
            text: {
              primary: "#ffffff",
            },
          },
          typography: {
            useNextVariants: true,
            fontFamily: font,
          },
        },
      };

      localStorage.setItem("theme", JSON.stringify(newTheme));
      break;

    case "UPDATE_CUSTOM_ONE_THEME":
      newTheme = {
        appbar: "#48435C",
        tabbar: "#9792E3",
        text: "#ffffff",
        background: "#5A5766",
        themeType: action.payload,
        theme: {
          palette: {
            type: "dark",
            primary: {
              main: "#48435C",
              dark: "#9792E3",
              light: "#5A5766",
              contrastText: "#fff",
            },
            text: {
              primary: "#ffffff",
            },
            background: {
              default: "#303030",
              paper: "#48435C",
            },
          },
          typography: {
            useNextVariants: true,
            fontFamily: font,
          },
        },
      };
      localStorage.setItem("theme", JSON.stringify(newTheme));
      break;

    case "UPDATE_CUSTOM_TWO_THEME":
      newTheme = {
        appbar: "#17BEBB",
        tabbar: "#212121",
        text: "#000000",
        background: "#FAD8D6",
        themeType: action.payload,
        theme: {
          palette: {
            type: "dark",
            primary: {
              main: "#17BEBB",
              dark: "#212121",
              light: "#ffffff",
              contrastText: "#fff",
            },
            text: {
              primary: "#000000",
            },
            background: {
              paper: "#FAD8D6",
            },
          },
          typography: {
            useNextVariants: true,
            fontFamily: font,
          },
        },
      };

      localStorage.setItem("theme", JSON.stringify(newTheme));
      break;

    case "CLEAR_ALL_THEME":
      newTheme = {};

      localStorage.removeItem("theme", JSON.stringify(newTheme));
      break;
    default:
      newTheme = MUItheme;
      break;
  }
  return newTheme;
};

export default getThemeSelectorDataReducer;
