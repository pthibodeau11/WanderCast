import axios from "axios";
import newstream from "../../components/NewStream/newstream";

const initialState = {
  streams: [{ approved: [], pending: [] }],
  stream: {}
};

const CREATE_STREAM = "CREATE_STREAM";
const GET_ALL_STREAMS = "GET_ALL_STREAMS";
const GET_ONE_STREAM = "GET_ONE_STREAM";
const GET_PENDING_STREAMS = "GET_PENDING_STREAMS";
const EDIT_PENDING_STREAM = "EDIT_PENDING_STREAM";
const ADMIN_EDIT_PENDING_STREAM = "ADMIN_EDIT_PENDING_STREAM";
const GET_APPROVED_STREAMS = "GET_APPROVED_STREAMS";
const DELETE_STREAM = "DELETE_STREAM";

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

export function editPendingStream(streamId, editedStream) {
  return {
    type: EDIT_PENDING_STREAM,
    payload: axios.put(`/api/streams/${streamId}`, editedStream)
  };
}

export function adminEditPendingStream(streamId, editedStream) {
  return {
    type: ADMIN_EDIT_PENDING_STREAM,
    payload: axios.put(`/api/admin/streams/${streamId}`, editedStream)
  };
}

export function getApprovedStreams() {
  return {
    type: GET_APPROVED_STREAMS,
    payload: axios.get(`/api/streams/approved`)
  };
}

export function deleteStream(streamId) {
  return {
    type: DELETE_STREAM,
    payload: axios.delete(`/api/streams/${streamId}`)
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${CREATE_STREAM}_FULFILLED`:
      return {
        ...state,
        streams: payload.data
      };
    case `${GET_ALL_STREAMS}_FULFILLED`:
      let allStreams = { ...state.streams };
      allStreams = payload.data;
      return {
        ...state,
        streams: allStreams
      };
    case `${GET_ONE_STREAM}_FULFILLED`:
      return {
        ...state,
        streams: payload.data
      };
    case `${GET_PENDING_STREAMS}_FULFILLED`:
      return {
        ...state,
        pending: payload.data
      };
    case `${EDIT_PENDING_STREAM}_FULFILLED`:
      let newStreams = { ...state.streams };
      newStreams.pending = payload.data;

      return {
        ...state,
        streams: newStreams
      };
    case `${ADMIN_EDIT_PENDING_STREAM}_FULFILLED`:
      let adminNewStreams = { ...state.streams };
      adminNewStreams.pending = payload.data;

      return {
        ...state
      };
    case `${GET_APPROVED_STREAMS}_FULFILLED`:
      return {
        ...state,
        approved: payload.data
      };
    case `${DELETE_STREAM}_FULFILLED`:
      return {
        ...state,
        approved: payload.data
      };
    default:
      return state;
  }
}
