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
            copy goals. My head is already starting to spin with ideas on how I
            can help you achieve them.
          </p>
          <p>
            I’ll be in touch within two business days to either set up a call or
            connect you with resources that I think will be helpful.
          </p>
          <p>Thanks again! Helen Anne</p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
