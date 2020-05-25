import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Button from "../components/button"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const AgenciesPage = ({ data }) => {
  return (
    <Layout>
      <div className="item hero-wrapper">
        <Img className="hero-img" fluid={data.image1.childImageSharp.fluid} />
        <div className="hero-copy mobile-padding">
          {/* <p class="eyebrow">Agencies</p> */}
          <h1>
            Make them<br></br>say <span className="purple-copy">"wow"</span>!
          </h1>
        </div>
      </div>

      <div className="help-section-one">
        <div className="help-section-one-copy mobile-padding">
          <h2>People are looking to you for results.</h2>
          <p>
            Your client wants top-notch copy. Your boss wants the project to be
            a raging success.
          </p>
          <p>
            You need someone who can take the reins and get the job done because
            you’re busy. Like, really busy.
          </p>
          <p>Relax. I’m on it.</p>
        </div>

        <div className="help-section-one-image mobile-padding">
          <Img
            className="agencies-results"
            fluid={data.image2.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>

      <div className="help-section-two">
        <div className="help-section-two-image mobile-padding">
          <Img
            className="in-your-shoes"
            fluid={data.image3.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>

        <div className="help-section-two-copy mobile-padding">
          <h2>I’ve been in your shoes…</h2>
          <p>
            tasked with running massive projects while juggling the needs of
            clients, stakeholders and employees.
          </p>
          <p>
            I know how important it is to find a partner who can run with a
            project and deliver results that — let’s be frank — make you look
            good.
          </p>
          <p>Real good.</p>
        </div>
      </div>

      <div className="trusted-by">
        <h2 className="subtitle">Trusted By</h2>

        <div className="trusted-by-logos mobile-padding">
          <Img
            className="logo advent-health-icon"
            fixed={data.image5.childImageSharp.fixed}
            alt=""
          />

          <Img
            className="logo tripadvisor-icon"
            fixed={data.image6.childImageSharp.fixed}
            alt=""
          />

          <Img
            className="logo mastercard-icon"
            fixed={data.image7.childImageSharp.fixed}
            alt=""
          />

          <Img
            className="logo sony-icon"
            fixed={data.image8.childImageSharp.fixed}
            alt=""
          />

          <Img
            className="logo viacom-icon"
            fixed={data.image9.childImageSharp.fixed}
            alt=""
          />
        </div>

        <div className="testimonial mobile-padding">
          <Img
            className="quotes-left-yellow-icon"
            fixed={data.image10.childImageSharp.fixed}
            alt=""
          />
          <p className="quote">
            It's an absolute honor to recommend Helen Anne as a creative
            director and copywriter. I worked alongside Helen Anne for over a
            year building and writing a new (and very large) brand's website.
            She gracefully researched, wrote and reviewed other's work for
            thousands of pages. Resourceful, reliable, optimistic are a few
            words that come to mind when I think of Helen Anne. I look forward
            to our next opportunity to partner up!
          </p>
          <Img
            className="testimonial-image sarah-suits"
            fixed={data.image12.childImageSharp.fixed}
            alt=""
          />
          <h3 className="person">Sarah Suits</h3>
          <p className="title">
            VP, Senior Producer <span className="dot">&#8226;</span> 22Squared
          </p>
        </div>
      </div>

      <div className="agencies-cta">
        <div className="agencies-cta-wrapper">
          <div className="agencies-cta-copy mobile-padding">
            <h2 className="subtitle">Are you ready...</h2>
            <p>
              to join forces with a freelancer who’s obsessed with your clients’
              success?
            </p>
            <p>
              Who knows how important it is to make everyone on your team say
              “wow!”?
            </p>
            <p>Then let's chat!</p>

            <ListLink to="/contact">
              <Button buttonText="Schedule A Call" />
            </ListLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/agencies-hero-alt.jpg" }) {
      ...cover
    }

    image2: file(relativePath: { eq: "images/agencies-results.png" }) {
      ...cover
    }

    image3: file(relativePath: { eq: "images/in-your-shoes.png" }) {
      ...cover
    }

    image4: file(relativePath: { eq: "images/agencies-cta.jpg" }) {
      ...cover
    }

    image5: file(relativePath: { eq: "unused-business-logos/22Squared.png" }) {
      ...fixed
    }

    image6: file(relativePath: { eq: "unused-business-logos/Spark.png" }) {
      ...fixed
    }

    image7: file(relativePath: { eq: "business-logos/mastercard.png" }) {
      ...fixed
    }

    image8: file(relativePath: { eq: "business-logos/Sony.png" }) {
      ...fixed
    }

    image9: file(relativePath: { eq: "business-logos/Viacom.png" }) {
      ...fixed
    }

    image10: file(relativePath: { eq: "icons/quotes-left-yellow.png" }) {
      ...fixed
    }

    image11: file(relativePath: { eq: "images/mindy-adams.png" }) {
      ...fixed
    }

    image12: file(relativePath: { eq: "images/sarah-suits.png" }) {
      ...fixed
    }
  }
`

export default AgenciesPage
