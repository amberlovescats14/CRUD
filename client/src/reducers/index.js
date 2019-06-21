import {combineReducers} from "redux";

const musicArray = (state=[], action) => {
  switch(action.type){
    default: return [...state]
  }
}


const rootReducer = combineReducers({
  music: musicArray
});
export default rootReducer;
