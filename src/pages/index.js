import React from "react"
import "./index.scss"
import { Container } from "react-bootstrap"
import { Header, Footer } from "../components";
import { graphql } from "gatsby"
import Home from "./Home"

export default function MainApp({ data }) {
  return (
    <div className="main-wrapper d-flex flex-column justify-content">
      <Header />
      <Container className="content-wrapper flex-grow-1">
        { data.allMarkdownRemark.totalCount }
        <Home />
      </Container>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark {
      totalCount
      nodes {
        frontmatter {
          title
        }
      }
      edges {
        node {
          id
        }
      }
    }
  }
`