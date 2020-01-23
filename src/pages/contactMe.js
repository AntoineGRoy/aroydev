import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"



const ContactMe = () => {
  
  return(
  <Layout>
    <Head pageTitle="Contact"/>
    <SEO title="Contact Antoine Roy" />
    <h1 className="contactHeader">Contact <span>the Web Developer</span> Antoine Roy</h1>
    <div className="formContainer">
    <form method="post" action="https://getform.io/f/086f4ff5-2be7-4c8a-9dc3-00ebe08e6674">
  <label for="email">
    Email
    <input  type="email" name="email" id="email" />
  </label>
  <label for="name">
    Name
    <input type="text" name="name" id="text"/>
  </label>
  <label for="message">
    Message
    <textarea rows="15" type="text" name="message" id="message"></textarea> 
  </label>
     <div class="g-recaptcha" data-sitekey="6LdfzqcUAAAAALrt3ztxWifjPoaMWFIwES_JV9u2"></div>
  <button type="submit">Send</button>
</form>
    </div>
    <script>
    grecaptcha.ready(function() {
				grecaptcha.execute("6Lct6tEUAAAAAIpp90oLcOZ6LtKFrLewaEgGaP7K", {action: "homepage"})
				.then(function(token) {							            document.getElementById('captchaResponse').value = token;
				});
			});
   </script>
  </Layout>
)}

export default ContactMe
