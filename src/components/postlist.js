import { Link} from "gatsby"
import Parser from "../components/parser"
import Img from "gatsby-image"
import React, { Component } from "react"
import "../css/postList.scss"

class PostList extends Component {
  render() {
    const data = this.props.data
    const categoryName = this.props.categoryName
    const categorySlug= this.props.categorySlug
    if(categorySlug==="work"){
      return (
        <div className={categorySlug}>
        <h1>{categoryName}</h1>
          <div className="mainPostsContainer">
          {data.map((node) => (
            <div className="postContainer" key={node.slug}>
            {node.featured_media && <div className="imgContainer"><Img fluid={node.featured_media.localFile.childImageSharp.fluid}/></div>}
              <div className="title-content"><Link className="title-excerpt-link" to={node.slug}>
                <h2 className="title"><Parser data={node.title}/></h2>
                <p className="excerpt"><Parser data={node.content}/></p>
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
            {node.featured_media && <div className="imgContainer"><Img fluid={node.featured_media.localFile.childImageSharp.fluid}/></div>}
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


