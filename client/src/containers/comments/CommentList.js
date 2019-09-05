import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getComments, deleteComment } from '../../actions/commentActions';     


class CommentList extends Component {
  
  componentDidMount(){    
       this.props.getComments(this.props.article.id)
  }

  render() {
    const article = this.props
    if(this.props.comments.length) {
    return (
      <div>
        <h4>comments</h4>
        {this.props.comments.map((comment) => {
          return(
            <div key={comment.id}>
              <h2><Link to={`/comments/${comment.id}`}></Link></h2>
              {comment.body}
              <span className="deleteTaskBtn"  style={deleteBtn} onClick={(e) => this.props.deleteComment(article, comment.id)}> X</span>
              <hr/>
            </div>
          )     
        })}
        
      </div>
    )
      } else {
        return (<div>No comments</div> )
      }
  } 
}

const deleteBtn = {         
  color: 'red',          
}



const mapStateToProps = (state) => ({
   comments: state.comments, 
   article: state.article
  });



export default connect(mapStateToProps, {getComments, deleteComment})(CommentList);


