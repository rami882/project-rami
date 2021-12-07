
import {
GET_MOVIES,GET_MOVIES_FAIL,GET_MOVIES_SUCCESS
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
      return {...state,loading:true}
      case GET_MOVIES_SUCCESS: return{...state,loading:false,movies:payload}
      case GET_MOVIES_FAIL : return{...state,loading:false,err:payload}
    default:
      return state;
  }
}
