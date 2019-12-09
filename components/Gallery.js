import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/gallery.css"
import { IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io"


const Gallery = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <div className="gallery-content">
      <div className="gallery-container-outer">
        <div className="gallery-container">
          <Img
            fluid={node.childImageSharp.fluid}
            key={node.id}
            alt={node.name.replace(/-/g, " ").substring(2)}
          />
        </div>
        <button onClick={() => handlePrevious()} className="btn-arrow left">
          <IoMdArrowDropleft/>
        </button>
        <button onClick={() => handleNext()} className="btn-arrow right">
          <IoMdArrowDropright/>
        </button>
      </div>
    </div>
  )
}

export default Gallery