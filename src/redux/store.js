import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogsReducer";

const store = createStore(blogReducer, composeWithDevTools(applyMiddleware( logger, thunk)));
export default store