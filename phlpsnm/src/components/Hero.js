import React from "react"

import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

import Pdf from "../assets/pdfs/PhilipsanmResume.pdf"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>PhilipSanM</h1>
            <h4>Jeremiah 29:11</h4>
            <a href={Pdf} className="btn">
              resume
            </a>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/bochi.png"
          alt="portfolio"
          // className="hero-img"
          placeholder="blurred"
          layout="fixed"
          width={500}
          height={600}
        />

        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
