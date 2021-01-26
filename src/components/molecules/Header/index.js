import React from "react"
import { Container, Navbar } from "react-bootstrap"
import "./style.scss"
import { LogoKS } from  "../../../assets"

const Header = () => {
  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand href="#">
				  <img 
						src={LogoKS} 
						className="mr-2"
						width="23"/>
					khoufstudio
				</Navbar.Brand>
      </Container>
    </Navbar>
  )
} 

export default Header
