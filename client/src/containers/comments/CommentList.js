import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getComments } from '../../actions/commentActions';

class CommentList extends Component {
  
  componentDidMount(){
    this.props.getComments(this.props.article.id)
  }

  render() {
    if(this.props.comments.length) {
    return (
      <div>
        <h4>comments</h4>
        {this.props.comments.map((comment) => {
          return(
            <div key={comment.id}>
              <h2><Link to={`/comments/${comment.id}`}></Link></h2>
              {comment.body}
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

const mapStateToProps = (state) => ({
   comments: state.comments, 
   article: state.article
  });

export default connect(mapStateToProps, {getComments})(CommentList);


