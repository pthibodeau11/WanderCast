import axios from "axios";

const initialState = {
  applications: []
};

const GET_ALL_APPS = "GET_ALL_APPS";
const GET_PENDING_APPS = "GET_PENDING_APPS";
const CREATE_APP = "CREATE_APP";

export function getAllApps() {
  return {
    type: GET_ALL_APPS,
    payload: axios.get(`/api/app/`)
  };
}

export function getPendingApps() {
  return {
    type: GET_PENDING_APPS,
    payload: axios.get(`/api/app/pending`)
  };
}

export function createApp(newApp) {
  return {
    type: CREATE_APP,
    payload: axios.post("/api/app/", newApp)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL_APPS}_FULFILLED`:
      return {
        applications: payload.data
      };
    case `${GET_PENDING_APPS}_FULFILLED`:
      return {
        applications: payload.data
      };
    case `${CREATE_APP}_FULFILLED`:
      return {
        applications: payload.data
      };

    default:
      return state;
  }
}
