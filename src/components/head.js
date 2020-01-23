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
          }]}>  
                <script src="https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key"></script>
                <script>
                    grecaptcha.ready(function() {
                        grecaptcha.execute('_reCAPTCHA_site_key_', {action: 'homepage'}).then(function(token) {
                           ...
                        });
                    });
                 </script>
        </Helmet>
    )
}
export default Head
