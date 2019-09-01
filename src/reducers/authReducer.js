import * as authAction from '../actions/authAction';

const initialState = {};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authAction.REQ_LOGIN:
      return { ...state };
    case authAction.SET_PAGE:
      console.log(`reducer type: ${action.type} payload: ${action.payload}`);
      return { ...state, previousPage: action.payload };
    default:
      return { ...state };
  }
};

export default auth;
