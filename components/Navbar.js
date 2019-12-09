import React, { Component } from "react"
import "../css/navbar.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"


class Navbar extends Component {

  state = {
    links: [
      {
        path: "/#hotel",
        text: "hotel",
      },
      {
        path: "/galeria",
        text: "galeria",
      },
      {
        path: "/wydarzenia",
        text: "eventy",
      },
      {
        path: "/#kontakt",
        text: "kontakt",
      },
    ],
    navOpen: false,
    navbarClass: "navbar-list",
    navbarClassActive: "navbar-list is-open",
    btnClass: "navbar-toggle-open",
    btnClassActive: "navbar-toggle-open is-active",
  }

  handleButton = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <AniLink fade to="/" className="logo-link">
              Apartamenty<span>Cedzyna</span>
            </AniLink>
          </div>
          <ul className="navbar-list-desktop">
            {this.state.links.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink fade to={item.path} className="navbar-desktop-link">
                    {item.text}
                  </AniLink>
                </li>)
            })}
          </ul>
          <div className={this.state.navOpen ? this.state.btnClassActive : this.state.btnClass}
               onClick={this.handleButton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={this.state.navOpen ? this.state.navbarClassActive : this.state.navbarClass}>
            {this.state.links.map((item, index) => {
              return (
                <li key={index} onClick={this.handleButton}>
                  <AniLink fade to={item.path} className="navbar-list-link">
                    {item.text}
                  </AniLink>
                </li>)
            })}
          </ul>
        </div>

      </nav>
  )
  }
  }

  export default Navbar