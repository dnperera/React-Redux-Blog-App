import {
  AUTH_USER,
  AUTH_ERROR,
  SAVE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH
} from "actions/types";

import axios from "axios";

export const signup = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post("/signup", { email, password });
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email in use!!"
    });
  }
};

// export function signup({ email, password }) {
//   return function(dispatch) {
//     dispatch({
//       type: AUTH_USER
//     });
//   };
// }

export const signin = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post("/signin", { email, password });

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid login details."
    });
  }
};
export const signout = () => {
  //clear the local storage related to token
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments/");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
