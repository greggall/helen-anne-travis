import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link } from "gatsby"
// import "../styles/style.scss"
import PortfolioCard from "../components/portfolio-card"
import Button from "../components/button"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Portfolio = ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="hero-wrapper">
          <Img
            className="hero-img"
            fluid={data.image13.childImageSharp.fluid}
          />
          <div className="hero-copy mobile-padding">
            <h1>
              Stories. Strategies. <span className="purple-copy">Results</span>.
            </h1>
          </div>
        </div>

        <div className="portfolio-wrapper">
          <div className="portfolio-items">
            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <Img
                  className="portfolio-img"
                  fluid={data.image11.childImageSharp.fluid}
                  alt=""
                />
                <Img
                  className="portfolio-logo"
                  fixed={data.image14.childImageSharp.fixed}
                  alt=""
                />
                <PortfolioCard
                  service="SaaS"
                  category="Brand Messaging"
                  intro="Imagination Media’s messaging needed a major facelift. I helped them develop a framework that ensured every customer interaction built trust and highlighted the brand’s expertise. In addition to rewriting their website, I also created assets like brochures, case studies and one-pagers."
                />
                <div className="clips">
                  <h4>Check 'em out:</h4>
                  <div className="clips-links">
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1128798/9f975f6eac6f9c44b480b40f5c9f942e.pdf?&_ga=2.65422958.158224766.1590011952-739005866.1580308791"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127069/53e8bf77192957301f4aafa093c8014a.pdf?&_ga=2.71310868.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        B2B Case Study
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127072/7194354993275dd0e535a65104ff4eee.pdf?&_ga=2.236493958.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        One-Pager
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <Img
                  className="portfolio-img"
                  fluid={data.image12.childImageSharp.fluid}
                  alt=""
                />
                <Img
                  className="portfolio-logo"
                  fixed={data.image15.childImageSharp.fixed}
                  alt=""
                />
                <PortfolioCard
                  service="e-Commerce"
                  category="Sales Copy"
                  intro="Launching a new website isn’t easy. But it’s a heck of a lot easier when you have an experienced copywriter on your team. I helped the Relay team find and develop their brand voice. I also worked with multiple stakeholders to create copy for their website, sales pages and lead magnets."
                />
                <div className="clips">
                  <h4>My favorite deliverables:</h4>
                  <div className="clips-links">
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127078/afe8f64676720ec861d6b1d5ddc84851.pdf?&_ga=2.13655216.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        About
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127077/84bff833aae6cd1c342909cd5165f8c7.pdf?&_ga=2.16743985.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        Our Story
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127076/503d40c4da07dfae53e5ef060944d731.pdf?&_ga=2.12426419.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        One Pager
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <Img
                  className="portfolio-img"
                  fluid={data.image1.childImageSharp.fluid}
                  alt=""
                />
                <Img
                  className="portfolio-logo"
                  fixed={data.image7.childImageSharp.fixed}
                  alt=""
                />
                <PortfolioCard
                  service="Copywriting"
                  category="Health Care"
                  intro="AdventHealth, one of the country's largest healthcare providers, went through a major digital rebranding in 2019. I served as the contract associate creative director and one of the lead copywriters on the project. My job was to ensure the copy on 300+ sites embraced a unified brand voice."
                />
                <div className="clips">
                  <h4>I’m really proud of these pages:</h4>
                  <div className="clips-links">
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127084/5ba5762cc5f551a8957f54f84a171ca6.pdf?&_ga=2.10057010.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        Bariatric and Weight Care
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1127085/9f45cadc399ffdc190a3ace126cf1234.pdf?&_ga=2.211244306.601475816.1589917949-739005866.1580308791"
                        target="_blank"
                      >
                        Behavioral Health Care
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <Img
                  className="portfolio-img"
                  fluid={data.image2.childImageSharp.fluid}
                  alt=""
                />

                <Img
                  className="portfolio-logo"
                  fixed={data.image8.childImageSharp.fixed}
                  alt=""
                />

                <PortfolioCard
                  service="Branded Content"
                  category="Travel"
                  intro="Since 2013, I've worked with the amazing team at TripAdvisor. I develop and write branded content for TripAdvisor.com and many of its partner sites. My role is to engage online readers with informative, well-researched trend pieces, destination tips and city profiles."
                />
                <div className="clips">
                  <h4>Here is one of my favorite stories:</h4>
                  <p>
                    <a
                      href="https://media.clippings.me/cuttingpdfs/1128821/1228fde8152f3eb66fa0a9c9214d5d39.pdf?&_ga=2.202312273.158224766.1590011952-739005866.1580308791"
                      target="_blank"
                    >
                      Curious California Campaign
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <Img
                  className="portfolio-img"
                  fluid={data.image3.childImageSharp.fluid}
                  alt=""
                />

                <Img
                  className="portfolio-logo"
                  fixed={data.image9.childImageSharp.fixed}
                  alt=""
                />

                <PortfolioCard
                  service="Content Marketing"
                  category="Education"
                  intro="From 2015 to 2019, I led the editorial production of NEXT, a college-prep magazine distributed to high schools throughout Florida. I developed each magazine’s editorial lineup and wrote more than 35 pages of in-depth, actionable content. I also coordinated the production schedule, photoshoots, promotions and more."
                />
                <div className="clips">
                  <h4>This was one of my favorite editions:</h4>
                  <div className="clips-links">
                    <p>
                      <a
                        href="https://media.clippings.me/cuttingpdfs/1068674/f3e1fa8709ed0608c2c97a944e794c64.pdf?&_ga=2.50052704.796952903.1581536327-802645054.1580420031"
                        target="_blank"
                      >
                        NEXT 2019-2020
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <Img
                  className="portfolio-img"
                  fluid={data.image4.childImageSharp.fluid}
                  alt=""
                />

                <Img
                  className="portfolio-logo"
                  fixed={data.image10.childImageSharp.fixed}
                  alt=""
                />

                <PortfolioCard
                  service="Journalism"
                  category="Business"
                  intro="For many years, Worth, an entrepreneurship and wealth management magazine geared toward affluent readers, produced an annual guide on the country's most dynamic cities. For three years, I led their Orlando coverage."
                />
                <div className="clips">
                  <h4>My favorite clips:</h4>
                  {/* <div className="clips-links"> */}
                  <p>
                    <a
                      href="https://media.clippings.me/cuttingpdfs/1127091/dc1f425bddc26935d7ebdedf83c0140c.pdf?&_ga=2.214855824.601475816.1589917949-739005866.1580308791"
                      target="_blank"
                    >
                      Ambitious development offers a vision of the future
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://media.clippings.me/cuttingpdfs/1128463/96044d14f89962c5f2f6e15d1f64c4f9.pdf?&_ga=2.266856910.158224766.1590011952-739005866.1580308791"
                      target="_blank"
                    >
                      How the Pulse shooting forever changed Orlando
                    </a>
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="about-cta">
            <div className="mobile-padding">
              <Header headerText="Like What You See?"></Header>

              <p>Click to schedule a complimentary 30-minute consultation.</p>

              <ListLink to="/contact">
                <Button buttonText="Schedule A Call" />
              </ListLink>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/adventhealth.jpg" }) {
      ...cover
    }

    image2: file(relativePath: { eq: "images/tripadvisor.jpg" }) {
      ...cover
    }

    image3: file(relativePath: { eq: "images/floridatrend.jpg" }) {
      ...cover
    }

    image4: file(relativePath: { eq: "images/worth.jpg" }) {
      ...cover
    }

    image5: file(relativePath: { eq: "images/floridalottery.jpg" }) {
      ...cover
    }

    image6: file(relativePath: { eq: "images/petmd.jpg" }) {
      ...cover
    }

    image7: file(relativePath: { eq: "business-logos/AdventHealth.png" }) {
      ...fixed
    }

    image8: file(relativePath: { eq: "business-logos/TripAdvisor.png" }) {
      ...fixed
    }

    image9: file(
      relativePath: { eq: "unused-business-logos/Florida-Trend.png" }
    ) {
      ...fixed
    }

    image10: file(relativePath: { eq: "business-logos/Worth.png" }) {
      ...fixed
    }

    image11: file(relativePath: { eq: "images/imagination-media.jpg" }) {
      ...cover
    }

    image12: file(relativePath: { eq: "images/relay.jpg" }) {
      ...cover
    }

    image13: file(relativePath: { eq: "images/portfolio-hero.jpg" }) {
      ...cover
    }

    image14: file(
      relativePath: { eq: "unused-business-logos/imagination-media-logo.png" }
    ) {
      ...fixed
    }

    image15: file(relativePath: { eq: "unused-business-logos/relay.png" }) {
      ...fixed
    }
  }
`

export default Portfolio
