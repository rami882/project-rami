import { GET_MOVIES,GET_MOVIES_SUCCESS,GET_MOVIES_FAIL, ADD_MOVIES, ADD_MOVIES_SUCCESS,ADD_MOVIES_FAIL, EDIT_MOVIES, EDIT_MOVIES_SUCCESS,EDIT_MOVIES_FAIL, DELETE_MOVIES, DELETE_MOVIES_SUCCESS,DELETE_MOVIES_FAIL} from './types';
import axios from 'axios';


//export const search = text => dispatch => {
  //dispatch({
    //type: SEARCH_MOVIE,
    //payload: text
  //});
  
//};

//export const fetchMovies = text => dispatch => {
 // axios
  //  .get("/get")
   // .then(response =>
    //  dispatch({
     //   type: FETCH_MOVIES,
     //   payload: response.data
//})
  //  )
   // .catch(err => console.log(err));
//};
 export const  fetchMovies = (movies) => async (dispatch) => {
  dispatch({type:GET_MOVIES})
  try {
      const {data} = await axios.get("/get")
      dispatch({type:GET_MOVIES_SUCCESS,payload:data})
  } catch (error) {
      dispatch({type:GET_MOVIES_FAIL,payload:error.response.data})
  }
}
export const fetchMovie = (movies) => async (dispatch) => {
  dispatch({type:ADD_MOVIES})
  try {
      const {data} = await axios.post("/add",)
      dispatch({type:ADD_MOVIES_SUCCESS,payload:data})
  } catch (error) {
      dispatch({type:ADD_MOVIES_FAIL,payload:error.response.data})
    
  }
}

export const  setLoading = (id,modif) => async (dispatch) => {
  dispatch({type:EDIT_MOVIES})
  try {
      const {data} = await axios.put("/edit/:id")
      dispatch({type:EDIT_MOVIES_SUCCESS,payload:data})
  } catch (error) {
      dispatch({type:EDIT_MOVIES_FAIL,payload:error.response.data})
  }
}

export const searchMovie = (id) => async (dispatch) => {
  dispatch({type:DELETE_MOVIES})
  try {
      const {data} = await axios.delete(`/delete/:id`)
      dispatch({type:DELETE_MOVIES_SUCCESS,payload:data})
  } catch (error) {
      dispatch({type:DELETE_MOVIES_FAIL,payload:error.response.data})
  }
}


