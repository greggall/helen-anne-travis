import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Button from "../components/button"
import ArrowCheckedList from "../components/arrow-checked-list.js"

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
            It's time to<br></br>
            <span className="purple-copy">get it done</span>.
          </h1>
        </div>
      </div>

      <div className="help-section-one">
        <div className="help-section-one-copy mobile-padding">
          <h2>Your head is swimming with content and copy ideas.</h2>
          <p>
            Whitepapers to write, landing pages to develop, email campaigns that
            you know will turn readers into devoted customers.
          </p>
          <p>
            There’s only one problem. You also have a million other items on
            your to-do list.
          </p>
          <p>
            There’s no time to craft, develop and execute an effective content
            marketing strategy, let alone a single blog post.
          </p>
        </div>

        <div className="help-section-one-image mobile-padding">
          <Img
            className="business-million-ideas"
            fluid={data.image2.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>

      <div className="help-section-two">
        <div className="help-section-two-image mobile-padding">
          <Img
            className="pen-paper"
            fluid={data.image3.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>

        <div className="help-section-two-copy mobile-padding">
          <h2>I’ve been there.</h2>
          <p>
            Before launching my business, I managed the B2B and B2C
            communications for the world’s top tech brands.
          </p>
          <p>I always had a ton of ideas, but not a ton of time.</p>
          <p>
            When I started freelancing, I knew I’d be a success if I could:{" "}
          </p>

          <ul className="checked-list">
            <ArrowCheckedList text="Help my clients achieve their goals — without wasting a second of their precious time"></ArrowCheckedList>
            <ArrowCheckedList text="Get up to speed quickly on any project"></ArrowCheckedList>
            <ArrowCheckedList text="Serve as a trusted extension of my client’s team"></ArrowCheckedList>
          </ul>

          <p>I was right.</p>
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
            className="logo trip-advisor-icon"
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
            As a busy (very busy) professional, working with someone like Helen
            Anne is key to helping me get my message out there without losing my
            mind.
          </p>
          <Img
            className="testimonial-image bertha-burruezo"
            fixed={data.image12.childImageSharp.fixed}
            alt=""
          />
          <h3 className="person">Bertha Burruezo</h3>
          <p className="title">
            Attorney <span className="dot">&#8226;</span> Burruezo &amp;
            Burruezo, PLLC
          </p>
        </div>
      </div>

      <div className="businesses-cta">
        <div className="businesses-cta-wrapper">
          <div className="businesses-cta-copy mobile-padding">
            <h2 className="subtitle">Are you ready...</h2>
            <p>
              to join forces with a copywriter who can help bring all your great
              ideas to life?
            </p>
            <p>Someone who can get the job done without getting in your way?</p>
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
    image1: file(relativePath: { eq: "images/businesses-hero-alt.jpg" }) {
      ...cover
    }

    image2: file(relativePath: { eq: "images/million-ideas.png" }) {
      ...cover
    }

    image3: file(relativePath: { eq: "images/been-there.png" }) {
      ...cover
    }

    image4: file(relativePath: { eq: "images/businesses-cta.jpg" }) {
      ...cover
    }

    image5: file(relativePath: { eq: "business-logos/AdventHealth.png" }) {
      ...fixed
    }

    image6: file(relativePath: { eq: "business-logos/TripAdvisor.png" }) {
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

    image12: file(relativePath: { eq: "images/bertha-burruezo.png" }) {
      ...fixed
    }
  }
`

export default BusinessesPage
