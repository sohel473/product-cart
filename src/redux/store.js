import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import cartMiddleware from "./middlewares/cartMiddleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, cartMiddleware))
);

export default store;
