import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql, Link } from "gatsby"
import Banner from "../components/Banner"
import Events from "../components/Events"

const wydarzenia = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.bcgEvent.childImageSharp.fluid} className="main-bg">
        <Banner title="Wydarzenia, Imprezy" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, perspiciatis.">
        </Banner>
      </StyledHero>
      <Events/>
    </Layout>
  )
}

export const query = graphql`
query {
  bcgEvent: file(relativePath:{eq: "bcgEvent.jpg"}) {
  childImageSharp{
    fluid(quality: 90, maxWidth:4160){
      ...GatsbyImageSharpFluid_withWebp
    }
   }
  }
}`


export default wydarzenia