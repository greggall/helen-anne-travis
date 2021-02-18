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
            Let's Get You <span className="purple-copy">More Customers</span>
          </h1>
          <p>
            My services help busy teams build meaningful and measurable customer relationships.
          </p>
        </div>
      </div>

      <div className="trusted-by content-marketing-trusted">
        <h2>Trusted by brands that take customer engagement seriously</h2>

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
            className="logo adventhealth-icon"
            fixed={data.image9.childImageSharp.fixed}
            alt=""
          />
        </div>
      </div>

      <div class="more">
        <div class="more-left">
          <h1>You want more leads. More sales. More respect.</h1>
          <p>But developing meaningful relationships with your target audience is a lot of work.  And your team is busy enough as it is.</p>
          <p>You need someone with years of experience on your side.</p>
          <p>Someone who knows how to develop the strategy and sales assets you need to drive results.</p>
          <h3>You're in the right place.</h3>
          <Img
            className="yellow-swoosh-right-place"
            fluid={data.image21.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>
        <div class="more-right">
          <Img className="more-right-img" fluid={data.image20.childImageSharp.fluid} />
        </div>
      </div>

      <div class="services-benefits">
        <p className="services-benefits-eyebrow">My Services</p>
        <h1 className="">Helping busy teams drive leads and conversions on autopilot</h1>
        <div class="service-benefits-wrapper">
          <div className="research">
            <Img
              className=""
              fixed={data.image22.childImageSharp.fixed}
              // objectFit="cover"
              alt=""
            />
            <h4>Deep customer research</h4>
            <p>Find out exactly what your customers need to hear from you — so you can build trust, increase authority and drive more sales.</p>
          </div>
          <div className="positioning">
            <Img
              className=""
              fixed={data.image23.childImageSharp.fixed}
              // objectFit="cover"
              alt=""
            />
            <h4>Unique brand positioning</h4>
            <p>As a former journalist, I love helping clients develop powerful brand stories that get their ideal prospects’ attention.</p>
          </div>
          <div className="strategy">
            <Img
              className=""
              fixed={data.image24.childImageSharp.fixed}
              // objectFit="cover"
              alt=""
            />
            <h4>Strategies that work</h4>
            <p>Stop throwing spaghetti at the wall to see what sticks. Start giving your customers exactly what they need to say “YES!” to your offer.</p>
          </div>
        </div>
        <Img
            className="swoosh-divider"
            fluid={data.image21.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
      </div>

      <div className="package-wrap">
        <div className="package-details">
          <p className="package-eyebrow">Want a website that gets results?</p>
          <h1>Conversion Website Copy</h1>
          {/* <p className="package-eyebrow">Overview</p> */}
          {/* <div className="package-divider"></div> */}
          <p className="package-description">
            Your current site was designed with the best intentions. But you know it could be doing SO MUCH MORE for your brand. 
          </p>
          <p className="package-description">
            Let me transform it into your company’s top salesperson. One that works 24/7/365 to capture leads and drive conversions. Without your team having to lift a finger.
          </p>
          <p className="package-description">
            Get website copy that does the hard work of selling for you. 
          </p>
          <p className="package-description">
            <strong>Website refreshes start at $1,999<br></br>
            Website transformations start at $6,500</strong>
          </p>

          {/*<p className="package-eyebrow">Highlights</p>
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
                all you have to do is close the deal
              </p>
            </ul>
          </div> */}

          <div className="schedule-call">
            <div>
              <p className="waitlist-eyebrow">Most Popular Packages!</p>
              
              {/* <p className="price">Starting at $4,000</p> */}
            </div>
            <div className="package-button">
              <ListLink to="/contact">
                <Button buttonText="Get On The Waitlist!" />
              </ListLink>
            </div>
          </div>
          <div className="package-divider"></div>
          <div className="package-testimonial">
            <p>“Our new website copy makes us feel so much more confident. I can’t want to brag about it to the world.”</p>
            <div className="package-testimonial-person">
              <Img
                className="package-testimonial-image"
                fixed={data.image26.childImageSharp.fixed}
                alt=""
              />
              <h4 className="package-testimonial-name">Susanne Hildebrand</h4>
              <h4>Healthcare project manager</h4>
            </div>
          </div>
        </div>
        <div className="package-img">
          <Img
            className="website-copywriting"
            fluid={data.image25.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
          
        </div>
      </div>

      <div className="package-swap-background">
        <div className="package-wrap-swap">
          <div className="package-img-swap">
            <Img
              className="magnets-funnels-img"
              fluid={data.image27.childImageSharp.fluid}
              objectFit="cover"
              alt=""
            />
            
          </div>
          <div className="package-details-swap">
            <p className="package-eyebrow">Want to build deeper relationships with your website visitors?</p>
            <h1>Lead Magnets & Funnels</h1>
            {/* <p className="package-eyebrow">Overview</p> */}
            {/* <div className="package-divider"></div> */}
            <p className="package-description">
              Developing meaningful customer relationships takes time. Time your team simply doesn’t have. 
            </p>
            <p className="package-description">
              Let me help automate your customer engagement in the most powerful and authentic way. My funnel programs help you effortlessly build the trust you need to drive conversions.
            </p>
            <p className="package-description">
              Build your list and keep visitors engaged with your brand.
            </p>
            <p className="package-description">
              <strong>Lead magnets start at $1,500<br></br>
              Lead nurture funnels start at at $3,000</strong>
            </p>

            <div className="schedule-call">
            
              <div className="package-button">
                <ListLink to="/contact">
                  <Button buttonText="Yes, I Want This!" />
                </ListLink>
              </div>
            </div>
          <div className="package-divider"></div>
          <div className="package-testimonial">
            <p>“From the first call, Helen Anne was proactive and structured. She helped me understand what was needed to create high-quality deliverables and what changes we could make to increase conversions.”</p>
            <div className="package-testimonial-person">
              <Img
                className="package-testimonial-image"
                fixed={data.image28.childImageSharp.fixed}
                alt=""
              />
              <h4 className="package-testimonial-name">Ivona Namjesnik</h4>
              <h4>E-commerce consultant</h4>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="added-bonus-wrap">
          <h1><span>**</span>Added Bonus!<span>**</span></h1>
          <p>All of the packages above include one free month of weekly consultation calls (a $800 value) to help you get the most ROI out of our engagement.</p>
          <div className="bonus-benefits-wrapper">
              <div>
                <Img
                  className=""
                  fixed={data.image30.childImageSharp.fixed}
                  // objectFit="cover"
                  alt=""
                />
                <p>Brainstorm new content and copy ideas</p>
              </div>
              <div>
                <Img
                  className=""
                  fixed={data.image31.childImageSharp.fixed}
                  // objectFit="cover"
                  alt=""
                />
                <p>Get feedback on new and existing sales assets</p>
              </div>
              <div>
                <Img
                  className=""
                  fixed={data.image29.childImageSharp.fixed}
                  // objectFit="cover"
                  alt=""
                />
                <p>Strategize how to bring your marketing goals to life</p>
              </div>
          </div>
          <Img
            className="swoosh-divider"
            fluid={data.image21.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
      </div>

      <div className="package-wrap">
        <div className="package-details">
          <p className="package-eyebrow">Need expert-level help with your most pressing copy and content needs?</p>
          <h1>VIP Strategy Sessions</h1>
          {/* <p className="package-eyebrow">Overview</p> */}
          {/* <div className="package-divider"></div> */}
          <p className="package-description">
            Get money-making sales copy faster than you ever imagined with my VIP sessions. 
          </p>
          <p className="package-description">
            You’ll get full access to my brain — and 16 years of experience — for a full day. Together, we’ll transform your most important marketing materials into revenue-driving machines.
          </p>
          <p className="package-description">
            Examples of what we can accomplish in a full-day session —
          </p>
          <p className="package-description">
            <strong>Copy makeover</strong><br></br>
            Got a webpage that’s not converting or a marketing brochure that’s kinda “meh?” I’ll help transform it into your most powerful sales asset
          </p>
          <p className="package-description">
            <strong>... or a website audit</strong><br></br>
            Worried your website is holding you back? I’ll show you the quick fixes you can make to drive more conversions ASAP.
          </p>
          <p className="package-description">
            <strong>... or a content brainstorming</strong><br></br>
            Have a ton of ideas but don’t know where to start? I’ll help you understand what your audience needs to hear from you at each stage of the buying cycle.
          </p>

          {/*<p className="package-eyebrow">Highlights</p>
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
                all you have to do is close the deal
              </p>
            </ul>
          </div> */} 
        </div>
        <div className="package-img">
          <Img
            className="website-copywriting"
            fluid={data.image32.childImageSharp.fluid}
            objectFit="cover"
            alt=""
          />
        </div>

        <div className="choose-vip">
            <h1>Choose your VIP adventure</h1>
            <h2>One-hour deep dive: $199 | Half-day session: $600 | Full-day workshop: $950</h2>
            <p>Longer-term engagements also available!<br></br>
            BONUS: VIP clients save 10% on future sessions
            </p>

            <div className="package-button">
              <ListLink to="/contact">
                <Button buttonText="I Want More Leads!" />
              </ListLink>
            </div>
          
          <div className="package-testimonial">
            <p>“Helen Anne’s professionalism — and the end product — exceeded my expectations. I look forward to working with her in the future!”</p>
            <div className="package-testimonial-person">
              <Img
                className="package-testimonial-image"
                fixed={data.image33.childImageSharp.fixed}
                alt=""
              />
              <h4 className="package-testimonial-name">Ashley Ehlinger</h4>
              <h4>Sr. Director, Professional Solutions</h4>
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

      <div className="trust-me">
        <p class="eyebrow">Trust me with your marketing and sales goals</p>
        <h1>16 years of experience | 150+ happy clients | Trusted processes that work</h1>
        <div className="trust-me-cta">
          <div className="trust-block-one">
            <p>If you’re ready to transform your business, let’s talk.</p>
            <p>Click below to tell me a little bit more about your brand and your goals. </p>
            <p>If I know I can help, I’ll follow up within two days to schedule a complimentary consultation.</p>
            <p>You're busy. Let me help.</p>
            <ListLink to="/contact">
              <Button buttonText="Schedule A Call" />
            </ListLink>
          </div>
          <div className="trust-block-two">
            <Img
              className="trust-me-img"
              fluid={data.image34.childImageSharp.fluid}
              objectFit="cover"
              alt=""
            />
          </div>
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
      relativePath: { eq: "business-logos/AdventHealth.png" }
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

    image20: file(relativePath: { eq: "images/more-image.png" }) {
      ...cover
    }

    image21: file(relativePath: { eq: "images/yellow-swoosh.png" }) {
      ...cover
    }

    image22: file(relativePath: { eq: "images/deep-research-icon.png" }) {
      ...fixed
    }

    image23: file(relativePath: { eq: "images/positioning-icon.png" }) {
      ...fixed
    }

    image24: file(relativePath: { eq: "images/strategies-icon.png" }) {
      ...fixed
    }

    image25: file(relativePath: { eq: "images/conversion-website-copy.png" }) {
      ...cover
    }

    image26: file(relativePath: { eq: "images/susanne.png" }) {
      ...fixed
    }

    image27: file(relativePath: { eq: "images/magnets-and-funnels.png" }) {
      ...cover
    }

    image28: file(relativePath: { eq: "images/ivona.png" }) {
      ...fixed
    }

    image29: file(relativePath: { eq: "icons/strategize-icon.png" }) {
      ...fixed
    }

    image30: file(relativePath: { eq: "icons/brainstorm-icon.png" }) {
      ...fixed
    }

    image31: file(relativePath: { eq: "icons/feedback-icon.png" }) {
      ...fixed
    }

    image32: file(relativePath: { eq: "images/vip.png" }) {
      ...cover
    }

    image33: file(relativePath: { eq: "images/ashley.png" }) {
      ...fixed
    }

    image34: file(relativePath: { eq: "images/trust-me.png" }) {
      ...cover
    }
  }
`

export default ContentMarketingPage
