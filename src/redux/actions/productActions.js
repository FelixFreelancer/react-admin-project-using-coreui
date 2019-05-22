import axios from "axios";
import { GET_SINGLE_PRODUCT,RESET_SINGLE_PRODUCT } from "./types";
import { Constants } from "../../constants/environment";
import Auth from '../../cookie/Auth.js';

export const getSingleProduct = postData => dispatch => {
  console.log(postData,'product id');
  axios
    .get(Constants.BASE_URL + 'api/products/'+postData,  {
      headers: {
        Authorization: "Bearer "+Auth.getToken('token'),
      }
    })
    .then(result =>{
      console.log(result,'this is product list');
      return dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: result.data
      })
    }

    )
    .catch(function(error) {
      return dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: {}
      })
      // console.log("ERROR", error);
    });
};



export const resetSingleProduct = ()=> dispatch => {

      return dispatch({
        type: RESET_SINGLE_PRODUCT,
        payload: {}
      })

};

