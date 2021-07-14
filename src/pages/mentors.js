import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Mentor from "../components/mentor"

const MentorsPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Mentors = edges.map(edge => (
    <Mentor slug={edge.node.id} post={edge.node} />
  ))
  const seo = {
    title: "Interviews with Machine Learning Practitioners",
    description: "Stories, advice, and practical know-how from machine learning practitioners.",
    image: "https://applyingml.com/default-og-image.png",
    url: "https://applyingml.com/mentors/",
  }
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@eugeneyan" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>

      <p>
        Stories and advice from machine learning practitioners. Want to{" "}
        contribute an interview or recommend someone? Please make a{" "}
        <a
          href="https://github.com/eugeneyan/applyingml#contributing"
          target="_blank"
          rel="noreferrer"
        >
          pull request
        </a>{" "}
        or <a href="mailto:applyingml@gmail.com">email</a> us.
      </p>
      <p>{Mentors}</p>
    </Layout>
  )
}

export default MentorsPage

export const mentor = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "mentor" } } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            date
            slug
          }
        }
      }
    }
  }
`
