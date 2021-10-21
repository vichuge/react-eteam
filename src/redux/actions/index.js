import axios from 'axios';
import { ALL_ELEMENTS } from '../actionTypes';

export const all = (all) => ({ type: ALL_ELEMENTS, payload: all });

const myUrl = 'https://vichuge.github.io/react-eteam/data.json';
export const getList = () => async (dispatch) => {
  axios.get(myUrl)
    .then((response) => {
      dispatch(all(response.data));
    })
    .catch((e) => {
      console.error(e);
    });
};
