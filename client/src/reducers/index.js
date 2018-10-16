import { combineReducers } from "redux";
import authReducer from "reducers/authReducer";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  auth: authReducer,
  form: formReducer
});
