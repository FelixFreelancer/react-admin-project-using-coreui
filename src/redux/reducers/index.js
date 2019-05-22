import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";

//import store type reducer
import storeTypeReducer from "./storeTypesReducer"
export default combineReducers({
    categories: categoryReducer,
    auth: authReducer,
    order: orderReducer,
    product: productReducer,
    storeType: storeTypeReducer
});
