/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../css/layout.module.scss"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
  query SiteQuery {
      file(name: {eq: "logo"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    wordpressSiteMetadata {
      name
    }
  }
  `)

  return (
    <div className={layoutStyles.main}>
      <Header logo={data.file.childImageSharp.fluid} wordpressSiteTitle={data.wordpressSiteMetadata.name} siteMetadata={data.site.siteMetadata} />
      <content>{props.children}</content>
       <Footer siteMetadata={data.site.siteMetadata}/>
    </div>
  )
}

export default Layout
