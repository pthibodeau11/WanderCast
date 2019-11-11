import axios from "axios";

const initialState = {
  purchases: [],
  purchase: {}
};

const GET_ALL_PURCHASES = "GET_ALL_PURCHASES";
const GET_USER_PURCHASES = "GET_USER_PURCHASES";
const CREATE_NEW_PURCHASE = "CREATE_NEW_PURCHASE";

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

export function createPurchase(newPurchase) {
  return {
    type: CREATE_NEW_PURCHASE,
    payload: axios.post("/api/purchases", newPurchase)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL_PURCHASES}_FULFILLED`:
      return {
        purchases: payload.data
      };
    case `${GET_USER_PURCHASES}_FULFILLED`:
      return {
        purchases: payload.data
      };
    case `${CREATE_NEW_PURCHASE}_FULFILLED`:
      return {
        purchase: payload.data
      };
    default:
      return state;
  }
}
