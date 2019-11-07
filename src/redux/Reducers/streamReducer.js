import axios from "axios";

const initialState = {
  streams: { approved: [], pending: [] },
  stream: {}
};

const CREATE_STREAM = "CREATE_STREAM";
const GET_ALL_STREAMS = "GET_ALL_STREAMS";
const GET_ONE_STREAM = "GET_ONE_STREAM";
const GET_PENDING_STREAMS = "GET_PENDING_STREAMS";
const GET_APPROVED_STREAMS = "GET_APPROVED_STREAMS";

export function createStream(newStream) {
  return {
    type: CREATE_STREAM,
    payload: axios.post("/api/streams", newStream)
  };
}
export function getAllStreams() {
  return {
    type: GET_ALL_STREAMS,
    payload: axios.get(`/api/stream`)
  };
}

export function getOneStream(streamId) {
  return {
    type: GET_ONE_STREAM,
    payload: axios.get(`/api/streams/${streamId}`)
  };
}

export function getPendingStreams() {
  return {
    type: GET_PENDING_STREAMS,
    payload: axios.get(`/api/streams/pending`)
  };
}

export function getApprovedStreams() {
  return {
    type: GET_APPROVED_STREAMS,
    payload: axios.get(`/api/streams/approved`)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${CREATE_STREAM}_FULFILLED`:
      return {
        streams: payload.data
      };
    case `${GET_ALL_STREAMS}_FULFILLED`:
      return {
        streams: payload.data
      };
    case `${GET_ONE_STREAM}_FULFILLED`:
      return {
        streams: payload.data
      };
    case `${GET_PENDING_STREAMS}_FULFILLED`:
      return {
        pending: payload.data
      };
    case `${GET_APPROVED_STREAMS}_FULFILLED`:
      return {
        approved: payload.data
      };
    default:
      return state;
  }
}
