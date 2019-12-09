import React, { Component } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import "../css/StyledHero.css"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
background-image: linear-gradient(180deg, rgba(0,0,0,0.7) 63%, rgba(12,36,46,0.7) 100%, rgba(0,212,255,0.7) 100%);
background-position: bottom; 
background-size: cover;
background-attachment: fixed; 
opacity: 1 !important;
display: flex;
justify-content: center;
align-items: center;
min-height: ${props => (props.home ? "100vh" : "50vh")};
margin-top: ${props => (props.home ? "0" : "50px")};
`