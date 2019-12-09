import React, { Component } from "react"

const SimpleHero = ({ children}) => {
  return (
    <header className="main-head">
      {children}
    </header>
  )
}

export default SimpleHero