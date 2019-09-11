import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { getArticles} from '../../actions/index';
import ArticleIndex from '../../components/articles/ArticleIndex';

class ArticleList extends Component {
  
  componentDidMount(){
    console.log('Child did mount.');
    this.props.getArticles()
  }

  render() {
    if(this.props.articles.length) {
    return (
      <div >
        <h4>Articles</h4>
        {this.props.articles.map((article) => {
          return(
             <ArticleIndex article={article} />             
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


