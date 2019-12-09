import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Contact from "../components/Contact/Contact"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.headMainBcg.childImageSharp.fluid} className="main-bg">
      <Banner title="Apartamenty Cedzyna" info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, perspiciatis.">
        <Link to="/#kontakt">Zapytaj o nocleg</Link>
      </Banner>
    </StyledHero>
    <About/>
    <Contact/>
  </Layout>
)

export const query = graphql`
query {
  headMainBcg: file(relativePath:{eq: "headMainBcg.jpg"}) {
  childImageSharp{
    fluid(quality: 90, maxWidth:4160){
      ...GatsbyImageSharpFluid_withWebp
    }
   }
  }
}`

