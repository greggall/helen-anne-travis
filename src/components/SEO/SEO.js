import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ title, desc, banner, pathname, article, node }) => {
  const { site } = useStaticQuery(query)

  const {
    siteMetadata: {
      url,
      defaultTitle,
      defaultDescription,
      logo: defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${url}${banner || defaultBanner}`,
    url: `${url}${pathname || ""}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: url,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: url,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2020",
    creator: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Person",
      name: author,
    },
    datePublished: "2020-05-11T10:30:00+01:00",

    image: {
      "@type": "ImageObject",
      url: `${url}${defaultBanner}`,
    },
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="helen-anne-travis" content="Helen Anne Travis" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? "article" : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        url
        defaultTitle: title
        defaultDescription: description
        logo
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`
