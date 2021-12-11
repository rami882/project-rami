
import {
GET_MOVIES,GET_MOVIES_FAIL,GET_MOVIES_SUCCESS , ADD_MOVIES
,EDIT_MOVIES_FAIL , DELETE_MOVIES_FAIL ,ADD_MOVIES_FAIL,EDIT_MOVIES ,DELETE_MOVIES, ADD_MOVIES_SUCCESS, EDIT_MOVIES_SUCCESS, DELETE_MOVIES_SUCCESS, 
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: [],
  err:null
};


export default function(state = initialState, {type,payload}) {
  switch (type) {
    case GET_MOVIES:
    case ADD_MOVIES:
    case DELETE_MOVIES:
    case EDIT_MOVIES:
      return {...state,loading:true}
      case GET_MOVIES_SUCCESS: 
      return{...state,loading:false,movies:payload}
      
      case ADD_MOVIES_SUCCESS:
        return { ...state, isLoading: false, movies: [...state.movies, payload] };
        case EDIT_MOVIES_SUCCESS:
          return {
            ...state,
            isLoading: false,
            movies: state.movies.map((movie) =>
              movie._id === payload._id ? { ...movie, ...payload } : movie
            ),
          };
          case DELETE_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: state.movies.filter((movie) => movie._id !== payload._id),
      };

      case EDIT_MOVIES_FAIL:
        case DELETE_MOVIES_FAIL:
        case ADD_MOVIES_FAIL:
        case GET_MOVIES_FAIL:
          return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
}
