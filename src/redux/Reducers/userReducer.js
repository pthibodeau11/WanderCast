import axios from "axios";

const initialState = {
  users: [],
  user: {}
};

const GET_ALL = "GET_ALL";
const GET_ONE = "GET_ONE";
const VIEW_PROFILE = "VIEW_PROFILE";

export function getAllUsers() {
  return {
    type: GET_ALL,
    payload: axios.get("/admin/user/list")
  };
}

export function getOneUser(userId) {
  return {
    type: GET_ONE,
    payload: axios.get(`/admin/user/${userId}`)
  };
}

export function viewProfile() {
  return {
    type: VIEW_PROFILE,
    payload: axios.get(`/admin/user/`)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL}_FULFILLED`:
      return {
        ...state,
        users: payload.data
      };
    case `${GET_ONE}_FULFILLED`:
      return {
        ...state,
        user: payload.data
      };
    case `${VIEW_PROFILE}_FULFILLED`:
      return {
        ...state,
        user: payload.data
      };
    default:
      return state;
  }
}
