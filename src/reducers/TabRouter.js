
const changeTabsDataReducer = (
    TabRouterChanged=localStorage.getItem("changedTabRoute") === null
    ? {
        changedRoute:`/home/Technology`
        }
        :JSON.parse(localStorage.getItem("changedTabRoute"))
        ,
  action
) => {
  let newTabRouterChanged;
  switch (action.type) {
   

    case "UPDATE_TAB_ROUTER":
        newTabRouterChanged = {
            changedRoute:`/home/${action.payload}`
      };

      localStorage.setItem("changedTabRoute",JSON.stringify(newTabRouterChanged));
      break;

    case "CLEAR_TAB_ROUTER":
      newTabRouterChanged = {changedRoute:`/home/Technology`};

      localStorage.removeItem("changedTabRoute");
      break;
    default:
        newTabRouterChanged = TabRouterChanged;
      break;
  }
  return newTabRouterChanged;
};

export default changeTabsDataReducer;
