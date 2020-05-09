import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import "../styles/style.scss"

export default () => (
  <div>
    <Layout>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <p>Services. Such wow. Very React.</p>
    </Layout>
  </div>
)