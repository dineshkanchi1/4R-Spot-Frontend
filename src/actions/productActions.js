import Axios from "axios";
import { 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants"


export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get('https://dinesh-4r-spot.herokuapp.com/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });
    } catch(e){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: e.message
        });
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productId
    });
    try{
        const {data} = await Axios.get(`https://dinesh-4r-spot.herokuapp.com/api/products/${productId}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    } catch(e){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: e.response && e.response.data.message ? e.response.data.message : e.message
        });
    }
}