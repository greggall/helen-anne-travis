import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/ellipse.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="portfolio-item">
      <h4>
        {props.service}

        <Img
          className="yellow-dot"
          fixed={data.file.childImageSharp.fixed}
          alt="Gatsby Docs are awesome"
        />

        {props.category}
      </h4>

      <p>{props.intro}</p>
    </div>
  )
}
