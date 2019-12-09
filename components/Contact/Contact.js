import React from "react"
import "../../css/contact.css"
import HeadDecoration from "../HeadDecoration"
import Map from "./Map"

const Contact = () => {
  return (
    <section id="kontakt" className="section">
      <div className="section-style">
        <h2>Zapytaj o nocleg</h2>
        <HeadDecoration/>
        <div className="contact-container">
          <div className="form-container">
            <form action="" className="form">
              <input type="text" name="name" id="name" className="form-control" placeholder="Imię i nazwisko"/>
              <input type="email" name="email" id="email" className="form-control" placeholder="Adres email"/>
              <textarea name="message" id="message" cols="30" rows="10" className="form-control"
                        placeholder="Zapytaj o nocleg"/>
              <input type="submit" value="wyślij" className="sumbitInpt"/>
            </form>
            <a href="" className="contact-links">email@email.pl</a>
            <a href="" className="contact-links">123 456 789</a>
          </div>
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default Contact