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
            Build trust. <span className="purple-copy">Drive sales</span>.
          </h1>
          <p>
            My content and copywriting services help busy teams build meaningful
            — and measurable — relationships with their target audience.
          </p>
        </div>
      </div>

      <div className="package-wrap">
        <div className="package-details">
          <h1>Website Copywriting</h1>
          <p className="package-eyebrow">Overview</p>
          <div className="package-divider"></div>
          <p className="package-description">
            Whether you’re starting from scratch or updating an existing site, I
            can help ensure your copy is optimized to bring in more leads —
            without you having to lift a finger. To achieve this, I follow a
            trusted process for researching your customers’ needs and nailing
            your brand’s unique value proposition. Your competition is never
            gonna know what hit ‘em.
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
                <strong> No fluff, cliches or jargon</strong> allowed
              </p>
              <p>
                <span>&#183;</span> Get{" "}
                <strong>a website that acts as your top salesperson</strong>.
                All you have to do is close the deal.
              </p>
            </ul>
          </div>

          <div className="schedule-call">
            <div>
              <p className="package-eyebrow">Investment</p>
              <div className="package-divider"></div>
              <p className="price">Starting at $2,600</p>
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
              fluid={data.image17.childImageSharp.fluid}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="package-details-swap">
            <h1>Articles, Blogs and Thought Leadership Content</h1>
            <p className="package-eyebrow">Overview</p>
            <div className="package-divider"></div>
            <p className="package-description">
              Your readers are savvy. To get their attention, you have to
              deliver magazine-worthy, well-researched content that addresses
              their needs and helps them achieve their goals. You need more than
              just a writer. You need someone with real-world journalism and
              marketing experience to ensure each piece builds trust, creates
              value and highlights your expertise.
            </p>

            <p className="package-eyebrow">Highlights</p>
            <div className="package-divider"></div>

            <div className="highlights">
              <ul className="checked-list">
                <p>
                  <span>&#183;</span> Includes{" "}
                  <strong>four 700-word articles</strong> optimized to your
                  target keywords
                </p>
                <p>
                  <span>&#183;</span> Increase traffic and leads with{" "}
                  <strong>unique content</strong> that speaks directly to your
                  target audience
                </p>
                <p>
                  <span>&#183;</span> Keep readers on your site with
                  <strong> narrative-driven</strong> content that motivates,
                  entertains and inspires
                </p>
              </ul>
            </div>

            <div className="schedule-call">
              <div>
                <p className="package-eyebrow">Investment</p>
                <div className="package-divider"></div>
                <p className="price">Starting at $1,750</p>
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
          <h1>Content Marketing 101</h1>
          <p className="package-eyebrow">Overview</p>
          <div className="package-divider"></div>
          <p className="package-description">
            You know a smart content marketing strategy can bring in more leads,
            increase brand loyalty and boost your SEO ranking. But you also know
            developing a successful strategy takes time. Time you may not have
            if you’re juggling 16,000 other priorities. Let me help. With this
            package, you’ll always know what to say and how to say it in a way
            that resonates.
          </p>

          <p className="package-eyebrow">Highlights</p>
          <div className="package-divider"></div>

          <div className="highlights">
            <ul className="checked-list">
              <p>
                <span>&#183;</span> Get actionable tips for{" "}
                <strong>solving customer pain points</strong> at each stage of
                the buying cycles
              </p>
              <p>
                <span>&#183;</span> Understand the{" "}
                <strong>keywords your target audience is using</strong> to find
                content
              </p>
              <p>
                <span>&#183;</span> Includes a{" "}
                <strong>12-month editorial calendar</strong>, plus ideas for
                boosting engagement on social media.
              </p>
            </ul>
          </div>

          <div className="schedule-call">
            <div>
              <p className="package-eyebrow">Investment</p>
              <div className="package-divider"></div>
              <p className="price">Starting at $3,999</p>
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
            fluid={data.image18.childImageSharp.fluid}
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
              fluid={data.image19.childImageSharp.fluid}
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="package-details-swap">
            <h1>Brand Messaging Development</h1>
            <p className="package-eyebrow">Overview</p>
            <div className="package-divider"></div>
            <p className="package-description">
              A great brand is built around a strong voice. In order to build
              trust, that voice must be distinctive and recognizable. Most
              important, it must be consistent. You focus on growing your
              business. I’ll do the research and analysis necessary to develop a
              messaging framework that ensures every customer interaction builds
              trust and highlights your brand’s expertise.
            </p>

            <p className="package-eyebrow">Highlights</p>
            <div className="package-divider"></div>

            <div className="highlights">
              <ul className="checked-list">
                <p>
                  <span>&#183;</span> Empower your whole team to effortlessly
                  explain <strong>your brand’s value proposition</strong>
                </p>
                <p>
                  <span>&#183;</span> Gain{" "}
                  <strong>valuable audience insights</strong> with detailed
                  buyer personas
                </p>
                <p>
                  <span>&#183;</span> Identify{" "}
                  <strong>opportunities to stand out</strong> in an increasingly
                  crowded marketplace
                </p>
              </ul>
            </div>

            <div className="schedule-call">
              <div>
                <p className="package-eyebrow">Investment</p>
                <div className="package-divider"></div>
                <p className="price">Starting at $2,600</p>
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
