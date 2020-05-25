import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <div className="item contact-hero-wrapper">
        <div className="contact-hero-copy mobile-padding contact-wrapper">
          <h1>Thank you!</h1>
          <p>
            Thanks for taking the time to tell me more about your content and
            copy goals.
          </p>
          <p>I’ll be in touch within two business days.</p>
          <p>
            Cheers!<br></br>Helen Anne
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
