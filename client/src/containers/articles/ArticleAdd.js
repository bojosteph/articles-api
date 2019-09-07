import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../actions/index';

class ArticleAdd extends Component {
  state = { title: '', content: '', user_id: this.props.auth.user_id};     

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.addArticle(this.state)
  }

 
  render() {
    return (
      <div>
        <h4>Add Article </h4>
      <div class="row">
        <form  class="col s12" onSubmit={this.handleSubmit}>
          <div class="input-field col s12">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}
             class="materialize-textarea"  required />
          </div>
          <div class="input-field col s12">
            <label>Content</label>
            <textarea  name="content"  class="materialize-textarea" value={this.state.content} onChange={this.handleChange} 
               required />
          </div>
          <div class="input-field col s12">
            <label>Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}
             class="materialize-textarea"   required />
          </div>
          <div class="input-field col s12">
            <label>Image</label>
            <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange}
            class="materialize-textarea"  required />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Create</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  user_id: state.user_id
})

const mapDispatchToProps = { addArticle };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd);  

