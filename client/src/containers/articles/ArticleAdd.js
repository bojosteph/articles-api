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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}
             className="form-control"  placeholder="Title" required />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea  name="content" rows="5" cols="40" value={this.state.content} onChange={this.handleChange} 
            className="form-control" placeholder="Content"  required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}
             className="form-control"  placeholder="Description" required />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange}
             className="form-control"  placeholder="Image Url" required />
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
  auth: state.auth,
  user: state.user,
  user_id: state.user_id
})

const mapDispatchToProps = { addArticle };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd);



// handleSubmit(event) {
//   event.preventDefault();
//   let token = "Bearer " + localStorage.getItem("jwt")
//   axios({ method: 'post', url: '/api/articles', headers: {'Authorization': token }, data: this.state})
//     .then((response) => {
//       this.props.history.push(`/articles/${response.data.id}`);
//     })
//     .catch(error => console.log('error', error));
// }