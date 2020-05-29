import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const BusinessesPage = ({ data }) => {
  return (
    <Layout>
      <div className="hero-wrapper">
        <Img className="hero-img" fluid={data.image1.childImageSharp.fluid} />
        <div className="hero-copy mobile-padding">
          <h1>
            No Drama.<br></br>
            <span className="purple-copy">Just Great Content</span>.
          </h1>
        </div>
      </div>

      <div className="help-section-one">
        <div className="help-section-one-copy mobile-padding">
          <h2>You need more than a great writer.</h2>
          <p>
            You need someone who’s obsessed with deadlines, style guides and
            word count.
          </p>
          <p>
            Someone who has the experience — but not the ego — that comes with
            working for the world’s top publications.
          </p>
          <p>You need, well, me.</p>
        </div>

        <div className="help-section-one-image mobile-padding">
          <Img
            classNameName="great-writer-image"
            fluid={data.image2.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>

      <div className="help-section-two">
        <div className="help-section-two-image mobile-padding">
          <Img
            className="career"
            fluid={data.image3.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>

        <div className="help-section-two-copy mobile-padding">
          <h2>
            I started my career as a journalist at the Pulitzer Prize-winning
            Tampa Bay Times.
          </h2>
          <p>
            Eevry day, I worked with multiple editors under tight deadlines to
            deliver news and features that were held to the highest standards.
          </p>
          <p>
            Since becoming a freelancer, I’ve written for some of the world’s
            leading publications and websites.
          </p>
          <p>I’ve also led massive editorial projects for brands.</p>
          <p>
            When we work together, you get engaging stories that keep readers on
            the page. Deadlines are always met — and usually beaten — and
            revisions are drama-free.
          </p>
        </div>
      </div>

      <div className="trusted-by">
        <h2 className="subtitle">Trusted By</h2>

        <div className="trusted-by-logos mobile-padding">
          <Img
            className="logo guardian-icon"
            fixed={data.image6.childImageSharp.fixed}
            alt=""
          />

          <Img
            className="logo nat-geo-icon"
            fixed={data.image13.childImageSharp.fixed}
            alt=""
          />

          <Img
            className="logo worth-icon"
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

        <div className="publications-testimonial mobile-padding">
          <Img
            className="quotes-left-yellow-icon"
            fixed={data.image10.childImageSharp.fixed}
            alt=""
          />
          <p className="quote">
            Helen Anne was always someone our editorial team could count on for
            a variety of assignments, ranging from lighthearted lifestyle pieces
            to serious, medical-themed articles. Helen Anne always pitched
            interesting ideas and upheld due dates. She truly was a pleasure to
            work with.
          </p>
          <Img
            className="testimonial-image deidre-grieves"
            fixed={data.image14.childImageSharp.fixed}
            alt=""
          />
          <h3 className="person">Deidre Grieves</h3>
          <p className="title">
            Senior Digital Media Producer <span className="dot">&#8226;</span>{" "}
            PetMD
          </p>
        </div>
      </div>

      <div className="publications-cta">
        <div className="publications-cta-wrapper">
          <div className="publications-cta-copy mobile-padding">
            <h2 className="subtitle">Are you ready ...</h2>
            <p>
              to join forces with a freelance writer who can get the job done
              without balking at style guides, word counts and feedback?
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
    image1: file(relativePath: { eq: "images/publications-hero.jpg" }) {
      ...cover
    }

    image2: file(relativePath: { eq: "images/great-writer.png" }) {
      ...cover
    }

    image3: file(relativePath: { eq: "images/breaking-news.png" }) {
      ...cover
    }

    image4: file(relativePath: { eq: "images/publications-cta.jpg" }) {
      ...cover
    }

    image5: file(relativePath: { eq: "business-logos/CNN.png" }) {
      ...fixed
    }

    image6: file(relativePath: { eq: "images/Guardian.png" }) {
      ...fixed
    }

    image7: file(relativePath: { eq: "business-logos/Worth.png" }) {
      ...fixed
    }

    image8: file(relativePath: { eq: "business-logos/CNN.png" }) {
      ...fixed
    }

    image9: file(relativePath: { eq: "images/Globe-And-Mail.png" }) {
      ...fixed
    }

    image10: file(relativePath: { eq: "icons/quotes-left-yellow.png" }) {
      ...fixed
    }

    image11: file(relativePath: { eq: "images/mindy-adams.png" }) {
      ...fixed
    }

    image12: file(relativePath: { eq: "business-logos/AdventHealth.png" }) {
      ...fixed
    }

    image13: file(relativePath: { eq: "business-logos/nat-geo.png" }) {
      ...fixed
    }

    image14: file(relativePath: { eq: "images/deidre-grieves.png" }) {
      ...fixed
    }
  }
`

export default BusinessesPage
