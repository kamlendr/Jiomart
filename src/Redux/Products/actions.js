import {
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
} from './action_types';
import axios from 'axios';

export const getProducts =
  (sort,mainCat='',keyword = '', currentPage = 1, price, category) =>
  async (dispatch) => {
      
    const fetchProducts = axios.create({
      baseURL: 'http://localhost:3004',
      method: 'get',
      params:{
        _sort:sort.property,
        _order:sort.order
      }
    });
    try {
      dispatch({ type: PRODUCTS_REQUEST });

      const { data } = mainCat ? await fetchProducts('/products',{params:{mainCat:mainCat}}) : await fetchProducts('/products') 
      

      dispatch({
        type: PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_FAIL,
        payload: error.response,
      });
    }
  };


export const getCategoryDetails =
  (payload) =>
  async (dispatch) => {

    try {
      dispatch({ type: CATEGORY_REQUEST });

      const { data } =  await axios.get('http://localhost:3004/categories')
      

      dispatch({
        type: CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_FAIL,
        payload: error.response,
      });
    }
  };
