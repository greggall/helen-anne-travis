import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Subtitle from "../components/subtitle"
import RadioCheckedList from "../components/radio-checked-list"
import ArrowCheckedList from "../components/arrow-checked-list"
import Layout from "../components/layout"
import Button from "../components/button"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const HomePage = ({ data }) => {
  return (
    <Layout>
      <div className="item hero-wrapper">
        <div className="hero-copy mobile-padding">
          <h1>
            Content You Can <span className="purple-copy">Count On</span>
          </h1>

          {/* <p>Targeted, effective copy delivered on time, on brand and on spec.</p> */}
          <p className="home-hero-tagline">
            Engaging content and copy for busy teams that need it done right the
            first time.
          </p>
          {/* <p class="home-hero-tagline">On brand.</p>
              <p class="home-hero-tagline">On spec.</p> */}

          <ListLink to="/contact">
            <Button buttonText="Schedule A Call" />
          </ListLink>
        </div>
      </div>

      <div className="item smart-section mobile-padding">
        <h2 className="subtitle">You're smart.</h2>

        <p>
          You know how important engaging content is to an organization’s bottom
          line. But you and your team are busy. Like, really busy.
        </p>
        <p>
          You need a creative leader who can craft content that’s not just
          beautifully written, but also delivered on time, on brand and on spec.
        </p>
        <p>
          Someone who will make your job — and let’s be real, your life —
          easier.
        </p>
        <p>
          <strong>You’re in the right place.</strong>
        </p>
      </div>

      <div className="item home-intro">
        <div className="home-intro-copy mobile-padding">
          <h3>Hi. I’m Helen Anne.</h3>

          <p>
            For the past 15 years (holy cow, has it really been that long?) I’ve
            helped the world’s top agencies, brands and publications engage
            their customers with content that motivates, inspires and sells.
          </p>

          <ul className="checked-list">
            <RadioCheckedList text="I’ve led massive marketing and editorial projects.">
              I’ve led massive marketing and editorial projects.
            </RadioCheckedList>
            <RadioCheckedList text="I’ve supervised large teams."></RadioCheckedList>
            <RadioCheckedList text="I’ve helped clients get the job done."></RadioCheckedList>
          </ul>

          <div className="home-intro-quote">
            {/* <Img
                className="quotes-left-yellow"
                fixed={data.image13.childImageSharp.fixed}
                alt=""
              /> */}

            {/* <p className="quote">If you have an opportunity to work with Helen Anne, grab it.</p>
              <h3 className="person">Jeff Burger</h3>
              <p className="title">Editor <span className="dot">&#8226;</span> <em>Business Jet Traveler</em></p> */}
          </div>
        </div>
      </div>

      <div className="item who-i-help">
        <h2 className="subtitle">Who I Help</h2>

        <div className="who-i-help-wrapper mobile-padding">
          <div className="i-help-agencies">
            <ListLink to="/agencies">
              <Img
                className="digital-pen"
                fixed={data.image4.childImageSharp.fixed}
                alt=""
              />

              <h3>Agencies & Firms</h3>

              <p>
                You’re drowning in work (congrats!) and need a writer who can
                get up to speed quickly on a project.
              </p>

              <Button buttonText="I'm On It" />
            </ListLink>
          </div>

          <div className="i-help-businesses">
            <ListLink to="/businesses">
              <Img
                className="business"
                fixed={data.image5.childImageSharp.fixed}
                alt=""
              />

              <h3>Businesses</h3>

              <p>
                You know how important quality content is to your bottom line
                but heck if you have time to write all that.
              </p>

              <Button buttonText="I Can Help" />
            </ListLink>
          </div>

          <div className="i-help-publications">
            <ListLink to="/publications">
              <Img
                className="publication"
                fixed={data.image6.childImageSharp.fixed}
                alt=""
              />

              <h3>Publications</h3>

              <p>
                You need engaging stories. You need them before deadline. And
                you need revisions to be a breeze.
              </p>

              <Button buttonText="Let's Chat" />
            </ListLink>
          </div>
        </div>
      </div>

      <div className="item trusted-by">
        <h2 className="subtitle">Trusted By</h2>

        <div className="trusted-by-logos mobile-padding">
          {data.allFile.edges.map(edge => (
            <Img
              // className={edge.node.childImageSharp.fixed.originalName}
              className="logo"
              fixed={edge.node.childImageSharp.fixed}
            />
          ))}
        </div>

        <div className="testimonial mobile-padding">
          <Img
            className="quotes-left-yellow-icon"
            fixed={data.image13.childImageSharp.fixed}
            alt=""
          />

          <p className="quote home-quote">
            If you have an opportunity to work with Helen Anne, grab it.
          </p>
          {/* <Img
              className="testimonial-image mindy-adams"
              fixed={data.image14.childImageSharp.fixed}
              alt=""
            /> */}
          <h3 className="person">Jeff Burger</h3>
          <p className="title">
            Editor <span className="dot">&#8226;</span>{" "}
            <em>Business Jet Traveler</em>
          </p>
        </div>
      </div>

      <div className="item different">
        <div className="different-copy mobile-padding">
          <Subtitle subtitleText="What Makes Me Different" />

          <p>
            I cut my teeth covering breaking news for one of the country’s top
            daily newspapers before leading the digital content strategy for
            brands like Panasonic, Sony and Canon.{" "}
          </p>

          <ul className="checked-list">
            <ArrowCheckedList text="I’ve led massive marketing and editorial projects."></ArrowCheckedList>
            <ArrowCheckedList text="I’ve supervised large teams."></ArrowCheckedList>
            <ArrowCheckedList text="I’ve helped clients get the job done."></ArrowCheckedList>
          </ul>

          <p>
            I know how to weave a story, manage a team, and get the job done
            right the first time.
          </p>

          <p>
            <strong>Don’t risk it.</strong>
          </p>

          <p>
            When the details matter and deadlines drive everything, you need to
            trust that your project is in the right hands. Don’t waste your
            time, money and sanity on unreliable contractors who don’t take you
            or your project seriously.
          </p>
        </div>
      </div>

      <div className="item promise">
        <div className="promise-lead mobile-padding">
          <Img
            className="lock-icon"
            fixed={data.image8.childImageSharp.fixed}
            alt=""
          />

          <h2 className="subtitle">My Promise To You</h2>

          <p>
            When we team up, you get more than a writer. You get a partner who’s
            committed to your success.
          </p>
        </div>

        <div className="promises-wrapper mobile-padding">
          <div>
            <Img
              className="status-icon"
              fixed={data.image9.childImageSharp.fixed}
              alt=""
            />

            <p>
              <strong>Regular status updates</strong>
            </p>
          </div>

          <div>
            <Img
              className="effective-icon"
              fixed={data.image10.childImageSharp.fixed}
              alt=""
            />

            <p>
              <strong>Targeted and effective copy</strong>
            </p>
          </div>

          <div>
            <Img
              className="error-icon"
              fixed={data.image11.childImageSharp.fixed}
              alt=""
            />

            <p>
              <strong>Error-free deliverables</strong>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="how-it-works">
          <div className="how-it-works-wrapper">
            <h2 className="subtitle">How It Works</h2>

            <h4>Step 1</h4>
            <p>Schedule a call with me here.</p>
            <Img
                  className="how-it-works-line"
                  fixed={data.image15.childImageSharp.fixed}
                  alt=""
              />
            
            <h4>Step 2</h4>
            <p className="mobile-padding">We’ll chat for 20 minutes about your needs and goals, hopes and dreams.</p>
            <Img
                  className="how-it-works-line"
                  fixed={data.image15.childImageSharp.fixed}
                  alt=""
              />

            <h4>Step 3</h4>
            <p className="mobile-padding">Together, we’ll develop a plan that allows you to focus on the other millions things on your to-do list while I focus on the copy.</p>
            <Img
                  className="how-it-works-line"
                  fixed={data.image15.childImageSharp.fixed}
                  alt=""
              />

            <h4>Step 4</h4>
            <p>I get to work.</p>
            <Img
                  className="how-it-works-line"
                  fixed={data.image15.childImageSharp.fixed}
                  alt=""
              />

            <h4>Step 5</h4>
            <p className="mobile-padding">You get to sit back, relax and feel total confidence that your project is in the right hands.</p>
          </div>
        </div> */}

      <div className="item hire-me">
        <h1 className="mobile-padding">What's It Going To Be?</h1>

        <div className="hire-me-wrapper">
          <div className="dont-hire">
            <h3>Don't Hire Me.</h3>

            <div class="dont-hire-reason">
              <Img
                className="hire-me-icon cancel-circle"
                fixed={data.image20.childImageSharp.fixed}
                objectFit="cover"
                alt=""
              />

              <p>
                Spend your days circling back on emails, chasing down updates
                and repeating instructions.
                <Img
                  className="right-yellow-arrow"
                  fixed={data.image17.childImageSharp.fixed}
                  alt=""
                />
              </p>
            </div>

            <div class="dont-hire-reason">
              <Img
                className="hire-me-icon cancel-circle"
                fixed={data.image20.childImageSharp.fixed}
                objectFit="cover"
                alt=""
              />

              <p>
                Insult your customers with copy full of errors, typos and
                jargon.
                <Img
                  className="right-yellow-arrow"
                  fixed={data.image17.childImageSharp.fixed}
                  alt=""
                />
              </p>
            </div>

            <div class="dont-hire-reason">
              <Img
                className="hire-me-icon cancel-circle"
                fixed={data.image20.childImageSharp.fixed}
                objectFit="cover"
                alt=""
              />

              <p>
                Risk your brand reputation by hiring someone who doesn’t take
                the time to understand you, your goals or your readers’ needs.
                <Img
                  className="right-yellow-arrow"
                  fixed={data.image17.childImageSharp.fixed}
                  alt=""
                />
              </p>
            </div>
          </div>

          <div className="hire">
            <h3>Hire Me!</h3>

            <div class="hire-reason">
              <Img
                className="hire-me-icon"
                fixed={data.image21.childImageSharp.fixed}
                objectFit="cover"
                alt=""
              />

              <p>
                Dazzle your clients, bosses and stakeholders with copy that’s
                on-brand, on-spec and delivered on time.
              </p>
            </div>

            <div class="hire-reason">
              <Img
                className="hire-me-icon"
                fixed={data.image21.childImageSharp.fixed}
                objectFit="cover"
                alt=""
              />

              <p>
                Engage your readers with content that informs, inspires and
                sells.
              </p>
            </div>

            <div class="hire-reason">
              <Img
                className="hire-me-icon"
                fixed={data.image21.childImageSharp.fixed}
                objectFit="cover"
                alt=""
              />

              <p>
                Trust your project to a skilled writer and leader with more than
                15 years of editorial and marketing experience.
              </p>
            </div>
          </div>
        </div>

        <div className="need-a-pro">
          <div className="need-a-pro-wrapper">
            <Img
              className="circle-check"
              fixed={data.image18.childImageSharp.fixed}
              alt=""
            />
            <Header headerText="I Need A Pro!"></Header>
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
    image3: file(relativePath: { eq: "icons/quotes-left-grey.png" }) {
      ...fixed
    }

    image4: file(relativePath: { eq: "icons/digital-pen.png" }) {
      ...fixed
    }

    image5: file(relativePath: { eq: "icons/business.png" }) {
      ...fixed
    }

    image6: file(relativePath: { eq: "icons/publications.png" }) {
      ...fixed
    }

    image8: file(relativePath: { eq: "icons/Lock.png" }) {
      ...fixed
    }

    image9: file(relativePath: { eq: "icons/Status-Updates-Icon.png" }) {
      ...fixed
    }

    image10: file(relativePath: { eq: "icons/Effective-Copy-Icon.png" }) {
      ...fixed
    }

    image11: file(relativePath: { eq: "icons/Error-Free-Icon.png" }) {
      ...fixed
    }

    image13: file(relativePath: { eq: "icons/quotes-left-yellow.png" }) {
      ...fixed
    }

    image14: file(relativePath: { eq: "images/mindy-adams.png" }) {
      ...fixed
    }

    image15: file(relativePath: { eq: "icons/How-It-Works-Line.png" }) {
      ...fixed
    }

    image17: file(relativePath: { eq: "icons/Right-Yellow-Arrow.png" }) {
      ...fixed
    }

    image18: file(relativePath: { eq: "icons/circle-check.png" }) {
      ...fixed
    }

    image19: file(relativePath: { eq: "images/home-intro-mobile.png" }) {
      ...fixed
    }

    image20: file(relativePath: { eq: "icons/cancel-circle.png" }) {
      ...fixed
    }

    image21: file(relativePath: { eq: "icons/yellow-circle-check.png" }) {
      ...fixed
    }

    allFile(filter: { relativeDirectory: { eq: "business-logos" } }) {
      edges {
        node {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  }
`

export default HomePage
