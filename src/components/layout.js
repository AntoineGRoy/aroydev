/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from "./header"
import Footer from "./footer"
import theme from '../theme'

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      file(name: { eq: "logo" }) {
        childImageSharp {
          gatsbyImageData(
            width: 37
            height: 37
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={'mainLayout'}>
        <Header
          logo={data.file.childImageSharp.gatsbyImageData}
          wordpressSiteTitle={data.site.siteMetadata.title}
          siteMetadata={data.site.siteMetadata}
        />
        <main>{props.children}</main>
        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    </ThemeProvider>
  )
}

export default Layout
