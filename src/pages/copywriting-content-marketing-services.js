import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Button from "../components/button"
import Header from "../components/header"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const ContentMarketingPage = ({ data }) => {
  return (
    <Layout>
      <div className="item hero-wrapper">
        <Img className="hero-img" fluid={data.image1.childImageSharp.fluid} />
        <div className="hero-copy mobile-padding">
          {/* <p class="eyebrow">Agencies</p> */}
          <h1>
            Build Trust. <span className="purple-copy">Drive Sales</span>.
          </h1>
          <p>
            My content and copywriting services help busy teams build meaningful
            — and measurable — relationships with readers.
          </p>
        </div>
      </div>

      <div className="trusted-by content-marketing-trusted">
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
      </div>

      <div className="package-wrap">
        <div className="package-details">
          <p className="package-eyebrow">Package #1</p>
          <h1>Website Copywriting</h1>
          <p className="package-eyebrow">Overview</p>
          <div className="package-divider"></div>
          <p className="package-description">
            Whether you’re starting from scratch or updating an existing site, I
            can help ensure your copy is optimized to bring in more leads —
            without you having to lift a finger. Your competition is never gonna
            know what hit 'em.
          </p>

          <p className="package-eyebrow">Highlights</p>
          <div className="package-divider"></div>

          <div className="highlights">
            <ul className="checked-list">
              <p>
                <span>&#183;</span> Build trust with{" "}
                <strong>customer-centric copy</strong> that directly addresses
                your readers’ needs
              </p>
              <p>
                <span>&#183;</span> Ensure every page communicates your value.
                <strong> No fluff, clich&eacute;s or jargon</strong> allowed
              </p>
              <p>
                <span>&#183;</span> Get{" "}
                <strong>a website that acts as your top salesperson</strong> —
                all you have to do is close the deal.
              </p>
            </ul>
          </div>

          <div className="schedule-call">
            <div>
              <p className="package-eyebrow">Investment</p>
              <div className="package-divider"></div>
              <p className="price">Starting at $4,000</p>
            </div>
            <div className="package-button">
              <ListLink to="/contact">
                <Button buttonText="Schedule A Call" />
              </ListLink>
            </div>
          </div>
        </div>
        <div className="package-img">
          <Img
            className="website-copywriting"
            fluid={data.image16.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>

      <div className="package-swap-background">
        <div className="package-wrap-swap">
          <div className="package-img-swap">
            <Img
              className="articles-blog-thought"
              fluid={data.image18.childImageSharp.fluid}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="package-details-swap">
            <p className="package-eyebrow">Package #2</p>
            <h1>Blogging Packages</h1>
            <p className="package-eyebrow">Overview</p>
            <div className="package-divider"></div>
            <p className="package-description">
              Readers are savvy. To get their attention, you need more than
              “just a blogger.” You need someone with real-world journalism and
              marketing experience to ensure each post builds trust, creates
              value and highlights your expertise.
            </p>

            <p className="package-eyebrow">Highlights</p>
            <div className="package-divider"></div>

            <div className="highlights">
              <ul className="checked-list">
                <p>
                  <span>&#183;</span>{" "}
                  <strong>Increase traffic and leads.</strong> Google loves
                  websites that regularly post new content!
                </p>
                <p>
                  <span>&#183;</span>{" "}
                  <strong>Stand out from the competition</strong> with a blog
                  that motivates, entertains and inspires
                </p>
                <p>
                  <span>&#183;</span> Each package{" "}
                  <strong>includes four 600-word posts</strong>, research and
                  professional editing
                </p>
              </ul>
            </div>

            <div className="schedule-call">
              <div>
                <p className="package-eyebrow">Investment</p>
                <div className="package-divider"></div>
                <p className="price">Starting at $1,850 for four blog posts</p>
              </div>
              <div className="package-button">
                <ListLink to="/contact">
                  <Button buttonText="Schedule A Call" />
                </ListLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="package-wrap">
        <div className="package-details">
          <p className="package-eyebrow">Package #3</p>
          <h1>Content Marketing 101</h1>
          <p className="package-eyebrow">Overview</p>
          <div className="package-divider"></div>
          <p className="package-description">
            Get the insight you need to bring in more leads, increase brand
            loyalty and boost your SEO ranking. With this package, you’ll always
            know what to say and how to say it in a way that resonates with your
            target audience.
          </p>

          <p className="package-eyebrow">Highlights</p>
          <div className="package-divider"></div>

          <div className="highlights">
            <ul className="checked-list">
              <p>
                <span>&#183;</span> Get actionable tips for{" "}
                <strong>solving customer pain points</strong> throughout the
                buying cycle
              </p>
              <p>
                <span>&#183;</span> Understand the{" "}
                <strong>keywords your target readers use</strong> to find
                content they need
              </p>
              <p>
                <span>&#183;</span> Includes a{" "}
                <strong>12-month editorial calendar</strong>, plus ideas for
                boosting engagement
              </p>
            </ul>
          </div>

          <div className="schedule-call">
            <div>
              <p className="package-eyebrow">Investment</p>
              <div className="package-divider"></div>
              <p className="price">Starting at $2,500</p>
            </div>
            <div className="package-button">
              <ListLink to="/contact">
                <Button buttonText="Schedule A Call" />
              </ListLink>
            </div>
          </div>
        </div>
        <div className="package-img">
          <Img
            className="website-copywriting"
            fluid={data.image19.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>

      <div className="package-swap-background">
        <div className="package-wrap-swap">
          <div className="package-img-swap">
            <Img
              className="articles-blog-thought"
              fluid={data.image17.childImageSharp.fluid}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="package-details-swap">
            <p className="package-eyebrow">Package #4</p>
            <h1>Custom Content and Copy</h1>
            <p className="package-eyebrow">Overview</p>
            <div className="package-divider"></div>
            <p className="package-description">
              Your needs are unique and change from month to month. Let me help.
              My custom monthly packages are designed to help you effortlessly
              knock out the most pressing content and copy deliverables on your
              to-do list.
            </p>

            <p className="package-eyebrow">Highlights</p>
            <div className="package-divider"></div>

            <div className="highlights">
              <ul className="checked-list">
                <p>
                  <span>&#183;</span> Set monthly deliverables based on{" "}
                  <strong>real-time business needs</strong>
                </p>
                <p>
                  <span>&#183;</span> Need a <strong>white paper</strong> one
                  month and <strong>web copy</strong> the next? No prob!
                </p>
                <p>
                  <span>&#183;</span> <strong>Build a robust pipeline</strong>{" "}
                  of engaging content and copy assets
                </p>
              </ul>
            </div>

            <div className="schedule-call">
              <div>
                <p className="package-eyebrow">Investment</p>
                <div className="package-divider"></div>
                <p className="price">Starting at $2,500/month</p>
              </div>
              <div className="package-button">
                <ListLink to="/contact">
                  <Button buttonText="Schedule A Call" />
                </ListLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta packages-dont-see">
        <div className="mobile-padding">
          <Header headerText="Don't see exactly what you need above?"></Header>

          <p>
            Don’t stress. Schedule a call below so we can talk more about your
            unique needs.
          </p>

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
    image1: file(relativePath: { eq: "images/content-marketing-hero.jpg" }) {
      ...cover
    }

    image2: file(relativePath: { eq: "images/strategy.png" }) {
      ...cover
    }

    image3: file(relativePath: { eq: "images/sugarcoat.png" }) {
      ...cover
    }

    image4: file(relativePath: { eq: "images/agencies-cta.jpg" }) {
      ...cover
    }

    image5: file(relativePath: { eq: "business-logos/mastercard.png" }) {
      ...fixed
    }

    image6: file(relativePath: { eq: "business-logos/TripAdvisor.png" }) {
      ...fixed
    }

    image7: file(relativePath: { eq: "business-logos/Viacom.png" }) {
      ...fixed
    }

    image8: file(
      relativePath: { eq: "unused-business-logos/Royal-Caribbean.png" }
    ) {
      ...fixed
    }

    image9: file(
      relativePath: { eq: "unused-business-logos/Florida-Lottery.png" }
    ) {
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

    image13: file(relativePath: { eq: "icons/strategy-icon.png" }) {
      ...fixed
    }

    image14: file(relativePath: { eq: "icons/blog-superstar-icon.png" }) {
      ...fixed
    }

    image15: file(relativePath: { eq: "icons/whitepapers-icon.png" }) {
      ...fixed
    }

    image16: file(relativePath: { eq: "images/website-copywriting.png" }) {
      ...cover
    }

    image17: file(relativePath: { eq: "images/articles-blog-thought.png" }) {
      ...cover
    }

    image18: file(relativePath: { eq: "images/content-101.png" }) {
      ...cover
    }

    image19: file(relativePath: { eq: "images/brand-messaging.png" }) {
      ...cover
    }
  }
`

export default ContentMarketingPage
