import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="package-item">
      <h2>{props.packageTitle}</h2>

      <p className="package-blurb">{props.packageBlurb}</p>

      <div className="package-seperator"></div>
    </div>
  )
}
