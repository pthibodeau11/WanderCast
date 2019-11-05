import axios from "axios";

const initialState = {
  purchases: []
};

const GET_ALL_PURCHASES = "GET_ALL_PURCHASES";
const GET_USER_PURCHASES = "GET_USER_PURCHASES";

export function getAllPurchases() {
  return {
    type: GET_ALL_PURCHASES,
    payload: axios.get(`/api/purchases`)
  };
}

export function getUserPurchases() {
  return {
    type: GET_USER_PURCHASES,
    payload: axios.get(`/api/purchases/user`)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL_PURCHASES}_FULFILLED`:
      return {
        reviews: payload.data
      };
    case `${GET_USER_PURCHASES}_FULFILLED`:
      return {
        reviews: payload.data
      };
    default:
      return state;
  }
}
