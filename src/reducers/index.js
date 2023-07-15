import {combineReducers} from "redux";
import { reducer as reduxformReducer } from 'redux-form';
import getThemeSelectorDataReducer from './ThemeSelector';
import changeTabsDataReducer from './TabRouter';
export default combineReducers({
    form:reduxformReducer,
    MUItheme:getThemeSelectorDataReducer,
    TabRouterChanged:changeTabsDataReducer
})