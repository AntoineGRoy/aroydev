import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Seo from "../components/seo"



const ContactMe = () => {
  
  return(
  <Layout>
    <Head pageTitle="Contact"/>
    <Seo title="Contact Antoine Roy" />
    <h1 className="contactHeader">Contact <span>the Web Developer</span> Antoine Roy</h1>
    <div className="formContainer">
    <form method="post" action="https://getform.io/f/086f4ff5-2be7-4c8a-9dc3-00ebe08e6674">
  <label for="email">
    Email{"\n"}
    <input  type="email" name="email" id="email" />
  </label>
  <label for="name">
    Name{"\n"}
    <input type="text" name="name" id="text"/>
  </label>
  <label for="message">
    Message{"\n"}
    <textarea rows="15" type="text" name="message" id="message"></textarea> 
  </label>{"\n"}
     
  <button type="submit">Send</button>
</form>
    </div>
  </Layout>
)}

export default ContactMe
