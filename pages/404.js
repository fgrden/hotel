import React, { Component } from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Error = () => {
  return (
    <div>
      <Layout>
        <div className="error-page">
          <div className="error-page-content">
            <span>Wystąpił błąd zapraszamy spowrotem na </span> <AniLink fade to="/"> Stronę Główną</AniLink>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Error