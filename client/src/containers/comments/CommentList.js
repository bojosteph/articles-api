import React, { Component } from 'react';
import  { connect } from 'react-redux';

import { getComments, deleteComment } from '../../actions/commentActions';  
import CommentsIndex from '../../components/comments/CommentsIndex'; 


class CommentList extends Component {
  
  componentDidMount(){    
       this.props.getComments(this.props.article.id)
  }    

  render() {
    const { article, deleteComment } = this.props
    if(this.props.comments.length) {
    return (
      <div>
        <h4>comments</h4>
        {this.props.comments.map((comment) => {
          return(
            <CommentsIndex  article={article} deleteComment={deleteComment} comment={comment} />
          )     
        })}
        
      </div>
    )
      } else {
        return (<div>No comments</div> )
      }
  } 
}



const mapStateToProps = (state) => ({
   comments: state.comments, 
   article: state.article
  });



export default connect(mapStateToProps, {getComments, deleteComment})(CommentList);


