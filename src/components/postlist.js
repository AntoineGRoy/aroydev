import { Link} from "gatsby"
import Parser from "../components/parser"
import React, { Component } from "react"

class PostList extends Component {
  render() {
    const data = this.props.data
    const categoryName = this.props.categoryName
    const categorySlug= this.props.categorySlug
    if(categorySlug==="work"){
      return (
        <div className={categorySlug}>
        <h1>{categoryName}</h1>
          <div className="mainPostsContainer" id="work">
          {data.map((node) => (
            <div className="postContainer" key={node.slug}>
            {node.featuredImage && <div className="imgContainer"><img src={node.featuredImage.url} alt={node.featuredImage.alt}/></div>}
              <div className="title-content"><Link to={node.slug} className="title-excerpt-link">
                <h2 className="title"><Parser data={node.title}/></h2>
                <p className="excerpt"><Parser data={node.excerpt}/></p>
              </Link></div>
            </div>
          ))}
          </div>
        </div>
      )
    }else{
      return (
        <div className={categorySlug}>
        <h1>{categoryName}</h1>
          <div className="mainPostsContainer">
          {data.map((node) => (
            <div className="postContainer" key={node.slug}>
            {node.featuredImage && <div className="imgContainer"><img src={node.featuredImage.url} alt={node.featuredImage.alt}/></div>}
                <div className="contentContainer">
                  <div className="title-content">
                    <Parser data={node.title}/>
                  </div>
                  <div className="content">
                    <Parser data={node.content}/>
                  </div>
                </div>
            </div>
          ))}
          </div>
        </div>
      )
    }
  }
}

export default PostList


