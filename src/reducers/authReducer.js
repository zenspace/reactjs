import {combineReducers} from 'redux';
import * as loginAction from '../actions';

const initialState = {}

const auth = (state=initialState, action) => {
    switch(action.type){
        case  loginAction.REQ_LOGIN:
            return { ...state };
        default:
            return {...state};
    }
};

export default auth;