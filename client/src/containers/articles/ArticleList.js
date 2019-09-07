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
      <div >
        <h4>Articles</h4>
        {this.props.articles.map((article) => {
          return(
            <div key={article.id} class="col s12 m6 l3">
              <div class="card-panel hoverable">
                <div key={article.id} class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={article.image_url} />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{article.title}<i class="material-icons right">more_vert</i></span>
                    <p><a href="#"><Link to={`/articles/${article.id}`}>{article.title}</Link></a></p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{article.title}<i class="material-icons right">close</i></span>
                    <p>{article.description}</p>
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


