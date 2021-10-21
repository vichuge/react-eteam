import axios from 'axios';
import { ALL_ELEMENTS } from '../actionTypes';

export const all = (all) => ({ type: ALL_ELEMENTS, payload: all });

export const getList = (token) => async (dispatch) => {
  axios.get(urlLists, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(all(response.data));
    })
    .catch(() => {
      const data = [
        {
          id: 0,
          username: '',
          token: '',
          status: false,
        }
      ];
      dispatch(all(data));
    });
};