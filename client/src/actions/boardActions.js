import axios from 'axios';
import { setAlert } from './alertActions';
import {
  GET_BOARDS,
  BOARD_ERROR,
  DELETE_BOARD,
  UPDATE_BOARD_LIST,
  ADD_BOARD,
  GET_BOARD,
  EDIT_BOARD,
  CLEAR_BOARDS
} from './types';

// Get boards
export const getBoards = () => async dispatch => {
  console.log('ENTER GET BOARDS')
  try {
    const res = await axios.get(`/api/boards/me`);

    console.log('ALMOST DONE... DATA:')
    console.log(res.data)

    dispatch({
      type: GET_BOARDS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get single board by id
export const getBoardById = id => async dispatch => {
  try {
      const res = await axios.get(`/api/boards/${id}`);

      dispatch({
          type: GET_BOARD,
          payload: res.data
      });
  } catch (err) {
      dispatch({
          type: BOARD_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
      });
  }
}

// Add Board
export const addBoard = ({name, history}) => async dispatch => {
    try {
      const config = {
          headers: {
            'Content-Type': 'application/json'
          }
      };

      const body = JSON.stringify({ name });

      const res = await axios.post(`/api/boards/`, body, config);
  
      dispatch({
        type: ADD_BOARD,
        payload: res.data
      });

      history.push(`/test/${res.data._id}`);
  
      dispatch(setAlert('QR Code Created', 'success'));
    } catch (err) {
      dispatch({
        type: BOARD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
};

// Edit Board
export const editBoard = (formData, boardId, history) => async dispatch => {
  try {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    const res = await axios.post(`/api/boards/edit/${boardId}`, formData, config);

    dispatch({
      type: EDIT_BOARD,
      payload: res.data
    });

    history.push(`/admin/${res.data._id}?show=all`);
    
    dispatch(setAlert('QR Code Updated', 'success'));
  } catch (err) {
    dispatch({
      type: BOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete board
export const deleteBoard = id => async dispatch => {
  try {
    await axios.delete(`/api/boards/${id}`);

    dispatch({
      type: DELETE_BOARD,
      payload: id
    });

    // dispatch(setAlert('Collection Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BOARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add scan
export const addScan = (id, history) => async dispatch => {
  try {
    const res = await axios.put(`/api/boards/scan/${id}`);

    dispatch({
      type: UPDATE_BOARD_LIST,
      payload: { id, scan_list: res.data }
    });

    history.push('/success');
  } catch (err) {
    console.log(err)
  }
};

// Remove all boards
export const clearBoards = () => dispatch => {
  dispatch({
      type: CLEAR_BOARDS
  });
}