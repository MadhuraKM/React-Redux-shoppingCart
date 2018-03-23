import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import productMiddleware from "../products/middleware";
import cartMiddleware from "../cart/middleware";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware( cartMiddleware)
);

export default store;
