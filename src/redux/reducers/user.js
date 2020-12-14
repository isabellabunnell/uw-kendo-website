import { LOGIN_SUCCESS, LOGOUT } from "../actionConstants"

export const INITIAL_STATE = {
   index: -1,
   name: "",
}

export const userReducer = (state=INITIAL_STATE, action) => {
   switch(action.type) {
      case LOGIN_SUCCESS:
         return {
            ...INITIAL_STATE,
            index: action.paylod.index,
            name: action.payload.name
         }
      case LOGOUT:
         return {
            ...INITIAL_STATE
         }
      default:
         return state
   }
}