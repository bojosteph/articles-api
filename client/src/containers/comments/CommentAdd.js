import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';
import TextArea from '../../components/forms/TextArea';
import Button from '../../components/buttons/Button';

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
        <TextArea 
           title={"Body"}
           rows={10}
           value={this.state.body}
           name={"body"}
           handleChange={this.handleChange}
           placeholder={"Body"}
          />
        </form>
        <Button
          action={this.handleSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          />
      </div>
     
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

const mapStateToProps = state => ({
  article: state.article,
  auth: state.auth
});

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);



