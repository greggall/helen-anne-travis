import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "../styles/style.scss"
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
        <div className="portfolio-hero-wrapper">
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
                <a href="https://www.adventhealth.com/" target="_blank">
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
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <a
                  href="https://www.tripadvisor.com/blog/5-magnificent-gardens-of-irelands-ancient-east/"
                  target="_blank"
                >
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
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <a
                  href="https://media.clippings.me/cuttingpdfs/1068674/f3e1fa8709ed0608c2c97a944e794c64.pdf?&_ga=2.50052704.796952903.1581536327-802645054.1580420031"
                  target="_blank"
                >
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
                    service="Publishing"
                    category="Education"
                    intro="From 2015 to 2019, I led the editorial production of NEXT, a college-prep magazine distributed to high schools throughout Florida. I developed each magazine’s editorial lineup, sourced and researched all articles, and wrote more than 35 pages of in-depth, actionable content. I also coordinated the production schedule, photoshoots, promotions and more."
                  />
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <a
                  href="https://www.worth.com/destination-2018-orlando/"
                  target="_blank"
                >
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
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <a
                  href="https://media.clippings.me/cuttingpdfs/1068685/9b6b3f864ee04201d22159e7ced12e94.pdf?&_ga=2.243564739.796952903.1581536327-802645054.1580420031"
                  target="_blank"
                >
                  <Img
                    className="portfolio-img"
                    fluid={data.image5.childImageSharp.fluid}
                    alt=""
                  />

                  <Img
                    className="portfolio-logo"
                    fixed={data.image11.childImageSharp.fixed}
                    alt=""
                  />

                  <PortfolioCard
                    service="Profiles"
                    category="Government"
                    intro="In 2018, I worked with the state-run Florida Lottery on a campaign to promote the Bright Futures Scholarship. The role required interviewing Bright Futures winners about how the scholarship helped them achieve their goals."
                  />
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper">
              <div className="portfolio-group">
                <a
                  href="https://www.petmd.com/cat/behavior/evr_ct_cattitude-why-is-my-cat-so-mean"
                  target="_blank"
                >
                  <Img
                    className="portfolio-img"
                    fluid={data.image6.childImageSharp.fluid}
                    alt=""
                  />

                  <Img
                    className="portfolio-logo"
                    fixed={data.image12.childImageSharp.fixed}
                    alt=""
                  />

                  <PortfolioCard
                    service="Content Marketing"
                    category="Pet Care"
                    intro="Since 2016, I've helped brands like PetMD develop engaging, research-based pet and pet-care content. I actively pitch stories and work with editors on branded and in-house content."
                  />
                </a>
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

    image11: file(
      relativePath: { eq: "unused-business-logos/Florida-Lottery.png" }
    ) {
      ...fixed
    }

    image12: file(relativePath: { eq: "business-logos/PetMd.png" }) {
      ...fixed
    }
  }
`

export default Portfolio
