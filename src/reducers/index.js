import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  // AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  // AUTHENTICATE_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from 'actions';

const initialState = {
  notes: [],
  articles: [],
  twitters: [],
  userIsLogged: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        userIsLogged: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        userRegistered: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        userIsLogged: false,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...payload.data],
        isFetching: false,
      };

    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType].filter(item => item._id !== payload._id)],
      };

    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.data],
      };

    default:
      return state;
  }
};

export default rootReducer;
