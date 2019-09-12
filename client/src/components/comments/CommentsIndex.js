import React from 'react'
import { Link } from 'react-router-dom';
// import authReducer from '../../reducers/authReducer';

const CommentsIndex = ({article, comment, deleteComment, auth}) => {
  return (
    <div key={comment.id}>
        <h2><Link to={`/comments/${comment.id}`}></Link></h2>
        <p>{comment.email } says {comment.body}</p>
       {auth.user_id && (comment.user_id === auth.user_id &&
        <span className="deleteTaskBtn"  style={deleteBtn} onClick={(e) => deleteComment(article, comment.id)}> <i class="material-icons">delete</i></span>) }
        <hr/>
    </div>
  )
}

const deleteBtn = {         
  color: 'red',          
}    

export default CommentsIndex
