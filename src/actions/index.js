import axios from 'axios';
import jwtDecode from 'jwt-decode';
import configFile from 'config';

const environment = process.env.NODE_ENV || 'development';
const config = configFile[environment];

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const AUTH_TOKEN_NAME = 'authToken';
export const API_URL = `${config.api_host}:${config.api_port}/${config.api_entry}`;

// additional utils
export const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_NAME)}`,
});

export const getUserData = () => jwtDecode(localStorage.getItem(AUTH_TOKEN_NAME));

export const logInUser = token => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const userIsLogged = () => {
  if (localStorage.getItem(AUTH_TOKEN_NAME)) return true;
  return false;
};

// redux actions
export const logOutUser = () => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  return axios
    .post(
      `${API_URL}/user/logout`,
      {},
      {
        headers: getHeaders(),
      },
    )
    .then(() => {
      localStorage.removeItem(AUTH_TOKEN_NAME);
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LOGOUT_FAILURE });
      console.log(err);
    });
};

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTHENTICATE_REQUEST });
  return axios
    .post(`${API_URL}/user/login`, {
      username,
      password,
    })
    .then(payload => {
      logInUser(payload.data.token);
      dispatch({ type: AUTHENTICATE_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      const payload = err;
      dispatch({ type: AUTHENTICATE_FAILURE, payload });
    });
};

export const register = (username, password) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`${API_URL}/user/register`, {
      username,
      password,
    })
    .then(payload => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, err });
    });
};

export const removeItem = (itemType, _id) => dispatch => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  axios
    .delete(`${API_URL}/note/${_id}`, {
      headers: getHeaders(),
    })
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          _id,
        },
      });
    })
    .catch(err => {
      console.log(`Cannot remove item!\n${err}`);
      dispatch({
        type: REMOVE_ITEM_FAILURE,
        payload: err,
      });
    });
};

export const addItem = (itemType, itemContent) => dispatch => {
  dispatch({ type: ADD_ITEM_REQUEST });
  axios
    .post(
      `${API_URL}/note`,
      {
        type: itemType,
        ...itemContent,
      },
      { headers: getHeaders() },
    )
    .then(({ data }) => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.log(`Cannot add item!\n${err}`);
      dispatch({
        type: ADD_ITEM_FAILURE,
        payload: err,
      });
    });
};

export const fetchItems = itemType => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get(`${API_URL}/notes/type`, {
      params: {
        type: itemType,
      },
      headers: getHeaders(),
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch(err => {
      console.log(err);
      const payload = err;
      dispatch({ type: FETCH_FAILURE, payload });
    });
};

export const fetchSingleItem = _id => {
  return axios
    .get(`${API_URL}/note/${_id}`, {
      headers: getHeaders(),
    })
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};
