import axios from 'axios';
import history from '../history';
import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  REPLACE_COMMENT

} from './types';


const apiUrl = 'http://localhost:3001/api/comments';
const token = "Bearer " + localStorage.getItem("jwtToken")




export const getComments = (articleId) => {
   debugger
  return (dispatch) => {
    return axios({method: 'get', url: `/api/articles/${articleId}/comments`, headers: {'Authorization': token }})
    .then(response => {
      dispatch({ type: RECEIVE_COMMENTS, payload: response.data})
    })
    .catch(error => { throw(error)})
  }
};

export const addArticle = ({ title, content, user_id }) => {
  return (dispatch) => {
    debugger
    return axios({ method: 'post', url:`${apiUrl}.json`, headers: {'Authorization': token }, data: {title, content, user_id}})
    .then(response => {
      let data = response.data;
      dispatch({
        type: ADD_COMMENT,
        payload: {id: data.id, title: data.title, content: data.content}
      })
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(error => { throw(error)});
  };
};

export const getArticle = (id) => {
  return (dispatch) => {
    return axios({method: 'get', url: `/api/articles/${id}`, headers: {'Authorization': token }})
      .then(response => {
        dispatch({ type: RECEIVE_COMMENT, payload: response.data });
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios({ method:'delete', url:`${apiUrl}/${id}.json`, headers: {'Authorization': token}})
    .then(response => {
      dispatch({ type: REMOVE_COMMENT, payload: {id}})
    })
    .then(() => {
      history.push("/articles")
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const updateArticle = (article) => {
  const articleId = article.id;
  return (dispatch) => {
    return axios({ method:'patch', url:`${apiUrl}/${article.id}.json`, headers: {'Authorization': token }, data: {title: article.title, content: article.content}})
      .then(response => {
        const data = response.data;
        dispatch({ type: UPDATE_COMMENT, payload: {id: data.id, title: data.title, content: data.content}})
        dispatch({ type: REPLACE_COMMENT, payload: {id: data.id, title: data.title, content: data.content}})
      })
      .then(() => {
        history.push(`/articles/${articleId}`)
      })
      .catch(error => { throw(error)});
  }
}

