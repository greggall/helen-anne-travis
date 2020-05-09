import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import RadioCheckedList from "../components/radio-checked-list.js"
import ArrowCheckedList from "../components/arrow-checked-list.js"
import CircleCheckedList from "../components/circle-checked-list.js"
import Subtitle from "../components/subtitle"
import Button from "../components/button"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className="item about-hero-wrapper">
        <div className="hero-copy mobile-padding">
          <h1>
            Hi. I'm <br></br>
            <span className="purple-copy">Helen Anne</span>.
          </h1>

          <p>
            I write content and copy for the world’s biggest brands and
            publications.
          </p>
          <p>But it’s not about me.</p>
          <p>
            <i>It’s about you.</i>
          </p>
        </div>
      </div>

      <div className="worked-hard mobile-padding">
        <h2>
          You’ve worked hard to get here. And people are looking to you for
          results.{" "}
        </h2>
        <p>You want — no, you deserve — a partner who can:</p>
        <ul className="checked-list worked-hard-checked-list">
          <RadioCheckedList text="Produce high quality content, on deadline and on voice"></RadioCheckedList>
          <RadioCheckedList text="Serve as a trusted extension of your team"></RadioCheckedList>
          <RadioCheckedList text="Get the job done right the first time"></RadioCheckedList>
        </ul>
      </div>

      <div className="count-on">
        <div className="count-on-wrapper mobile-padding">
          <div className="count-on-title">
            <h1>
              Count You Can <span class="yellow-copy">Count On</span>
            </h1>
          </div>

          <div className="count-on-content">
            <p>
              When we team up, you get a partner who works as hard as you do to
              ensure the project is a success.
            </p>
            <p>
              I have 15+ years of writing and content marketing experience,
              including:
            </p>
            <ul className="checked-list">
              <ArrowCheckedList text="5 years covering breaking news at the Pulitzer Prize-winning Tampa Bay Times"></ArrowCheckedList>
              <ArrowCheckedList text="5 years leading the B2B and B2C messaging strategy for Sony, Canon and Panasonic"></ArrowCheckedList>
              <ArrowCheckedList text="5 years leading editorial and marketing projects for TripAdvisor, MasterCard and Viacom"></ArrowCheckedList>
            </ul>
          </div>
        </div>
      </div>

      <div className="dont-risk">
        <Subtitle subtitleText="Don't Risk:" />

        <div className="dont-risk-wrapper mobile-padding">
          <div className="risk">
            <Img
              className="cancel-circle"
              fixed={data.image2.childImageSharp.fixed}
              objectFit="cover"
              alt=""
            />

            <p>
              The project’s success by hiring someone who thinks deadlines are
              just suggestions
            </p>
          </div>

          <div className="risk">
            <Img
              className="cancel-circle"
              fixed={data.image2.childImageSharp.fixed}
              objectFit="cover"
              alt="Cancel Circle"
            />
            <p>
              Wasting your time repeating instructions, resending emails or
              chasing down copy
            </p>
          </div>

          <div className="risk">
            <Img
              className="cancel-circle"
              fixed={data.image2.childImageSharp.fixed}
              alt="Cancel Circle"
            />
            <p>
              Your reputation — or your client’s! — on unreliable contractors
              who don’t deliver
            </p>
          </div>
        </div>
      </div>

      <div className="working-with-me">
        <div className="working-with-me-wrapper">
          <div className="working-with-me-copy mobile-padding">
            <h2>You’ll love working with me</h2>
            <ul className="checked-list">
              <CircleCheckedList text="I free up your time. Now you can tackle the millions of other items on your to-do list. (Yeay?)"></CircleCheckedList>
              <CircleCheckedList text="I make you look good. Your clients and stakeholders are going to be soooooooo happy with the results."></CircleCheckedList>
              <CircleCheckedList text="I get things done. Period."></CircleCheckedList>
            </ul>
            {/* <Img
            classNameName="love-working-with-me-img"
            fluid={data.image3.childImageSharp.fluid}

          /> */}
          </div>
        </div>
      </div>

      <div className="working-with-testimonials">
        <div className="working-with-testimonials-wrapper mobile-padding">
          <div className="testimonial about-testimonial">
            <Img
              className="quotes-left-yellow-icon"
              fixed={data.image4.childImageSharp.fixed}
              alt=""
            />

            <p className="quote">
              Helen Anne writes beautifully engaging copy.
              {/* From tight and crisp
              to compelling and moving, she crafts it all with ease and grace. */}
              She immerses herself so deeply in a brand's
              {/* foundation and  */}
              voice, she becomes fluent quickly. She's a rare partner. I'll
              always be grateful for an opportunity to work with her.
            </p>
            <Img
              className="testimonial-image mindy-adams"
              fixed={data.image5.childImageSharp.fixed}
              alt=""
            />
            <h3 className="person">Mindy Adams</h3>
            <p className="title">
              SVP, Group Creative Director <span className="dot">&#8226;</span>{" "}
              22Squared
            </p>
          </div>

          <div className="testimonial about-testimonial">
            <Img
              className="quotes-left-yellow-icon"
              fixed={data.image4.childImageSharp.fixed}
              alt=""
            />

            <p className="quote">
              I could not recommend anyone more highly than Helen Anne. She's a
              first rate writer, bursting with ability, enthusiasm and great
              ideas.
            </p>
            <Img
              className="testimonial-image jon-oneill"
              fixed={data.image9.childImageSharp.fixed}
              alt=""
            />
            <h3 className="person">Jon O'Neill</h3>
            <p className="title">
              Editor <span className="dot">&#8226;</span> Tampa Bay Times
            </p>
          </div>
        </div>
      </div>

      <div className="cta-setup">
        <h1>If You:</h1>

        <div className="cta-setup-wrapper mobile-padding">
          <div>
            <Img
              className="copy-icon"
              fixed={data.image6.childImageSharp.fixed}
              alt=""
            />
            <p>Need high-quality content delivered on time and on spec</p>
          </div>

          <div>
            <Img
              className="fancy-pen-icon"
              fixed={data.image7.childImageSharp.fixed}
              alt=""
            />
            <p>Have big goals but little time to bring them to life</p>
          </div>

          <div>
            <Img
              className="graph-icon"
              fixed={data.image8.childImageSharp.fixed}
              alt=""
            />
            <p>Want to team up with someone who works as hard as you do</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <div className="mobile-padding">
          <Header headerText="Let's Do This!"></Header>

          <p>Click to schedule a complimentary 30-minute consultation.</p>

          <ListLink to="/contact">
            <Button buttonText="Schedule A Call" />
          </ListLink>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/About-Hero.jpg" }) {
      ...cover
    }

    image2: file(relativePath: { eq: "icons/cancel-circle.png" }) {
      ...fixed
    }

    image3: file(relativePath: { eq: "images/love-working-with-me.jpg" }) {
      ...cover
    }

    image4: file(relativePath: { eq: "icons/quotes-left-yellow.png" }) {
      ...fixed
    }

    image5: file(relativePath: { eq: "images/mindy-adams.png" }) {
      ...fixed
    }

    image6: file(relativePath: { eq: "icons/copy-icon.png" }) {
      ...fixed
    }

    image7: file(relativePath: { eq: "icons/fancy-pen.png" }) {
      ...fixed
    }

    image8: file(relativePath: { eq: "icons/graph-icon.png" }) {
      ...fixed
    }

    image9: file(relativePath: { eq: "images/jon-oneill.png" }) {
      ...fixed
    }
  }
`

export default AboutPage
