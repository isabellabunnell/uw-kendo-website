import {
   LOGIN_FAILURE,
   LOGIN_NETWORK_ERROR,
   LOGIN_SUCCESS,
   LOGOUT
} from "../actionConstants"
import { LOGIN_STATE } from "../storeConstants"

export const INITIAL_STATE = LOGIN_STATE.LOGGED_OUT

export const loginReducer = (state=INITIAL_STATE, action) => {
   switch(action.type) {
      case LOGIN_SUCCESS:
         return LOGIN_STATE.LOGGED_IN
      case LOGIN_FAILURE:
         return LOGIN_STATE.LOGGED_FAILURE
      case LOGIN_NETWORK_ERROR:
         return LOGIN_STATE.NETWORK_ERROR
      case LOGOUT:
         return LOGIN_STATE.LOGGED_OUT
      default:
         return state
   }
}