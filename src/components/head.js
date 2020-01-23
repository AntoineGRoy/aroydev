import React from 'react'
import { Helmet } from "react-helmet"
import {graphql, useStaticQuery} from "gatsby"
const Head = (props)=>{
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
    return(
        <Helmet 
          title={props.pageTitle+ "-" + data.site.siteMetadata.title }
          htmlAttributes={{ lang: 'en' }}
          meta={[{ 
            name: 'description', 
            content: 'Antoine Roy is a Web Developer using React - HTML5 - CSS3 - ES6' 
          }]}/>
    )
}
export default Head
