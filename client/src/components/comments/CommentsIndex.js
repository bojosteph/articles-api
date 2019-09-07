import React from 'react'
import { Link } from 'react-router-dom';

const CommentsIndex = ({article, comment, deleteComment}) => {
  return (
    <div key={comment.id}>
        <h2><Link to={`/comments/${comment.id}`}></Link></h2>
        {comment.body}
        <span className="deleteTaskBtn"  style={deleteBtn} onClick={(e) => deleteComment(article, comment.id)}> X</span>
        <hr/>
    </div>
  )
}

const deleteBtn = {         
  color: 'red',          
}    

export default CommentsIndex
