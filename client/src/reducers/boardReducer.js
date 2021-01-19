import {
    GET_BOARDS,
    BOARD_ERROR,
    DELETE_BOARD,
    ADD_BOARD,
    UPDATE_BOARD_LIST,
    GET_BOARD,
    EDIT_BOARD,
    CLEAR_BOARDS
  } from '../actions/types';
  
  const initialState = {
    boards: [],
    board: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_BOARDS:
        return {
          ...state,
          boards: payload,
          loading: false
        };
      case GET_BOARD:
        return {
          ...state,
          board: payload,
          loading: false
        };
      case ADD_BOARD:
        return {
          ...state,
          boards: [payload, ...state.boards],
          board: payload,
          loading: false
        };
      case EDIT_BOARD:
        return {
            ...state,
            board: payload,
            loading: false
        };
      case DELETE_BOARD:
        return {
          ...state,
          boards: state.boards.filter(board => board._id !== payload),
          loading: false
        };
      case BOARD_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_BOARD_LIST:
          let tempDetail = state.board;

          if(tempDetail._id === action.payload.id) { 
              tempDetail = {...tempDetail, scan_list: action.payload.scan_list }
          }

          return {
              ...state,
              boards: state.boards.map(board =>
                  board._id === action.payload.id ? { ...board, scan_list: action.payload.scan_list } : board
              ),
              board: tempDetail
          };
      case CLEAR_BOARDS:
        return {
            ...state,
            boards: [],
            loading: false
        }
      default:
        return state;
    }
  }