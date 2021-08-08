import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
let reducers = combineReducers({
  
    dialogsPage: dialogsReducer,
    
});
let store = createStore(reducers);

export default store;