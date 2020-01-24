import { Link } from "gatsby"
import React from "react"
import headerStyles from "../css/header.module.scss"
import Img from "gatsby-image"


const Header = (props) => {
  const siteMetadata= props.siteMetadata
  const logo = props.logo
  return (
      <div className={headerStyles.header}>
        <div className={headerStyles.homecontainer}><Link to="/">
          <Img className={headerStyles.logo} alt={siteMetadata.title} fluid={logo}/></Link>
        </div>
        <div className={headerStyles.navbarcontainer}>
        <div key="contact-form">
          <Link to="/contactMe">Contact</Link>
        </div> 
       
        </div>
      </div>
    )
}

export default Header

