import React from "react"
import { graphql} from "gatsby"
import Parser from "../components/parser"
import Img from "gatsby-image"
import postStyles from "../css/post.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"


const Post= (props)=>{
    const StaticPage = props.data.wordpressPost
    let featuredImg = undefined
    if(!StaticPage.content){StaticPage.content=StaticPage.excerpt}
  
    

    if (StaticPage.featured_media) {
        featuredImg = StaticPage.featured_media.localFile.childImageSharp.fluid
    }

    return (
    <Layout>
      <Head pageTitle={StaticPage.title}/>
      <SEO title={StaticPage.title} />
        
      <div className={postStyles.post}>
        <h1><Parser data={StaticPage.title}/></h1>
        <div className={postStyles.content}>
          <div className={postStyles.imageContainer}>
          {featuredImg && <Img alt= {StaticPage.slug} fluid={featuredImg} />}
          </div>
          <div className={postStyles.article}>
          <Parser data={StaticPage.content}/>
          </div>
        </div>
      </div>
    </Layout>
    )
}
export default Post
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      slug
      excerpt 
      featured_media {
        localFile {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                        
                    }
                }
            }
        }
    }
  }`

