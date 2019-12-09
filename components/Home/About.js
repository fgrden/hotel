import React, { Component } from "react"
import "../../css/about.css"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import HeadDecoration from "../HeadDecoration"

const getAbout = graphql`
query aboutImage{
  aboutImage: file(relativePath:{eq: "bcgMain.jpg"}) {
  childImageSharp{
    fluid(maxWidth:600 ){
      ...GatsbyImageSharpFluid_tracedSVG
    }
   }
  }
}

`



const About = () => {
  const {aboutImage} = useStaticQuery(getAbout)
  return (
    <setion id="hotel" className="section">
      <div className="about-container section-style">
        <div className="header-section">
          <h2>Hotel</h2>
          <HeadDecoration/>
          <div className="about-content-container">
            <div className="img-container">
              <Image fluid={aboutImage.childImageSharp.fluid} alt=""/>
            </div>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa cupiditate debitis eligendi fuga,
              iste magnam magni mollitia, reiciendis saepe tenetur velit vero voluptatibus. Assumenda at beatae eveniet
              fugit odit quia reprehenderit! Ab adipisci alias commodi corporis delectus deserunt dignissimos et,
              exercitationem iste nihil, odio officia perferendis recusandae reiciendis tenetur!
            </p>
          </div>
        </div>
      </div>
    </setion>
  )
}

export default About