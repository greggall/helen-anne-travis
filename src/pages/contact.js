import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import { Helmet } from "react-helmet"


const ContactPage = ({ data }) => {
  return (

    <Layout>

      <div className="item contact-hero-wrapper">
          <div className="contact-hero-copy mobile-padding contact-wrapper">
            <h1>Let's Do<span className="purple-copy"> This</span>.</h1>

            <p>To kick things off, please take two minutes (I promise that’s all it will take) to answer the questions below. This information will help me determine the best way to achieve your goals of world domination.</p>
            <p>I'll follow up within two business days. Can't wait to chat more!</p>
            
          </div>
      </div>
          
      <Helmet>

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"></script>

      </Helmet>
            
           
            <div className="contact-form">
              
              <iframe src="https://hello.dubsado.com:443/public/form/view/5e18beecaf35f127cc612fb3"></iframe>

            </div>
          

    </Layout>
    )
  
  }

  export default ContactPage