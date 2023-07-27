import { combineReducers } from "redux";
import CardReducer from "./CardsReducer";

const root = combineReducers({
    cards:CardReducer
});

export default root;