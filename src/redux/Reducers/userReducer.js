import axios from "axios";

const initialState = {
  users: [],
  streamers: [],
  user: {}
};

const GET_ALL = "GET_ALL";
const GET_ALL_STREAMERS = "GET_ALL_STREAMERS";
const GET_ONE = "GET_ONE";
const VIEW_PROFILE = "VIEW_PROFILE";
const EDIT_PROFILE = "EDIT_PROFILE";

export function getAllUsers() {
  return {
    type: GET_ALL,
    payload: axios.get("/admin/user/list")
  };
}

export function getAllStreamers() {
  return {
    type: GET_ALL_STREAMERS,
    payload: axios.get("/admin/user/streamers")
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
    payload: axios.get(`/auth/user/`)
  };
}

export function editProfile(editedProfile) {
  return {
    type: EDIT_PROFILE,
    payload: axios.put(`/auth/user/edit`, editedProfile)
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
    case `${GET_ALL_STREAMERS}_FULFILLED`:
      return {
        ...state,
        streamers: payload.data
      };
    case `${GET_ONE}_FULFILLED`:
      return {
        ...state,
        user: payload.data
      };
    case `${VIEW_PROFILE}_FULFILLED`:
      console.log(payload);
      return {
        ...state,
        user: payload.data
      };
    case `${EDIT_PROFILE}_FULFILLED`:
      console.log(payload);
      return {
        ...state,
        user: payload.data
      };
    default:
      return state;
  }
}
