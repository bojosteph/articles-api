import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';

class CommentAdd extends Component {
  state = { body: '', article_id: '', user_id: '' };     

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let article = {body: this.state.body, article_id: this.props.article.id, user_id: this.props.auth.user_id }
    this.props.addComment(article)
  }

 
  render() {
    
    return (
      <div>
        <h4>Add Comment </h4>
        <form onSubmit={this.handleSubmit}>             
          <div className="form-group">
            <label>Body</label>
            <textarea name="body" rows="5" value={this.state.body} onChange={this.handleChange} 
            className="form-control" placeholder="Body"  required />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth
});

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);



