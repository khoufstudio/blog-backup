import React from "react"
import { Container } from "react-bootstrap"
import "./style.scss"

const Footer = () => {
  return (
    <footer className="bg-white p-4 text-center text-md-left">
      <Container>
        <p>Made with <span className="text-danger">♥</span> by <strong>khoufstudio</strong></p>
      </Container>
    </footer>
  )
}

export default Footer
