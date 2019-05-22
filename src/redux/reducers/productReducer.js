import {  GET_SINGLE_PRODUCT,RESET_SINGLE_PRODUCT} from "../actions/types";

const initialState = {
  product: {}, 
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:      
      return {
        ...state,
        product: action.payload
      };    
    case RESET_SINGLE_PRODUCT:      
    return {
      ...state,
      product: {}
    };           
    default:
      return state;
  }
}
