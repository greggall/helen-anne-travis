import { graphql } from 'gatsby'

export const cover = graphql`
  fragment cover on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fixed = graphql`
  fragment fixed on File {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`