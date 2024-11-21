
import { combineReducers } from 'redux';

export type Action = {
    type: string;
};


const initialState = {
    counter: 0
  };
  
  const counterReducer = (state = initialState, action:Action ) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      case "DECREMENT":
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  

  // Combine Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    // Add other reducers here if you have more
  });
  
export default rootReducer;
  