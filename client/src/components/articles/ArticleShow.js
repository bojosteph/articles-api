import React from 'react'
import { Link } from 'react-router-dom';

const ArticleShow = ({article}) => {
  return (
    <div class="col s6">
    <div class="card-panel hoverable">
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="responsive-img" src={article.image_url} />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{article.id} : {article.title}<i class="material-icons right">more_vert</i></span>
        <p>{article.description}</p>
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
    </div>
   </div>
   </div>
  )
}

export default ArticleShow
