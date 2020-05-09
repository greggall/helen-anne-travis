import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icons/circle-check.png" }) {
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
      
    <li>
        <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
        />
      <p>{props.text}</p>
    </li>
    
  )
}