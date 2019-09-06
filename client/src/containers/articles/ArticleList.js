import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles} from '../../actions/index';

class ArticleList extends Component {
  
  componentDidMount(){
    this.props.getArticles()
  }

  render() {
    if(this.props.articles.length) {
    return (
      <div>
        <h4>Articles</h4>
        {this.props.articles.map((article) => {
          return(

          <div key={article.id} class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src={article.image_url} />
                  <span class="card-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></span>
                </div>
                <div class="card-content">
                  <p>{article.description}</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>                       
          )     
        })}
        
      </div>
    )
      } else {
        return (<div>No Articles</div> )
      }
  } 
}

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps, {getArticles})(ArticleList);


