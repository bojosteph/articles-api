import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import articlesReducer from './articlesReducer';
import articleReducer from './articleReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  articles: articlesReducer,
  article: articleReducer,
  comments: commentsReducer,
})