import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticle, deleteArticle } from '../../actions/index';
import CommentList from '../comments/CommentList';
import CommentAdd from '../comments/CommentAdd';

class ArticleInfo extends Component {
  
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id)
  }

  

  render() {
    const article = this.props.article;
    return (
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={article.image_url} />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{article.id} : {article.title}<i class="material-icons right">more_vert</i></span>
        <p><a href="#">{article.description}</a></p>
        <div className="btn-group">
          <Link to={{ pathname: `/articles/${article.id}/edit`, state: { article: article }}} className="btn btn-info">Edit</Link> 
          <button onClick={() => this.props.deleteArticle(article.id)} className="btn btn-danger" type="button">Delete</button> 
          <Link to="/articles" className="btn btn-secondary">Close</Link>
        </div>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{article.title}<i class="material-icons right">close</i></span>
        <p>{article.content}</p>
      </div>
      <hr/>
        <CommentAdd />
        <CommentList />

       <br/>
    </div>     

      
    )
  }
}

const mapStateToProps = state => ({
  article: state.article
});
const mapDispatchToProps = { getArticle, deleteArticle}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInfo);


