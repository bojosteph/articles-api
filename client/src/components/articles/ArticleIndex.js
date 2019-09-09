import React from 'react'
import { Link } from 'react-router-dom';

const ArticleIndex = ({article}) => {
  return (    
            <div key={article.id} class="col s12 m6 l3">
              <div class="card-panel hoverable">
                <div key={article.id} class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={article.image_url} alt=""/>
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
}

export default ArticleIndex
