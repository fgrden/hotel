import React, { Component } from "react"

const Banner = ({title, info, children}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner