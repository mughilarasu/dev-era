import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./index";
const middleware = applyMiddleware(thunk);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(middleware));
export default store;
