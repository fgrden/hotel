import React, { Component } from "react"
import "../css/footer.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IoIosMail, IoIosPhoneLandscape } from "react-icons/io"

class Footer extends Component {
  state = {
    links: [
      {
        path: "#hotel",
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
        path: "#kontakt",
        text: "kontakt",
      },
    ],
  }

  render() {
    return (
      <footer id="main-footer">
        <div className="footer-content">
          <ul className="footer-links">
            {this.state.links.map((item, index) => {
              return (
                <li key={index}>
                  <AniLink fade to={item.path} className="footer-list-link">
                    {item.text}
                  </AniLink>
                </li>
              )
            })}
          </ul>
          <div className="icon-container">
            <IoIosMail/>
            <IoIosPhoneLandscape/>
          </div>
        </div>
        <p>Copyright 2019</p>
      </footer>
    )
  }
}

export default Footer