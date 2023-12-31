import React from "react"

import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

import Pdf from "../assets/pdfs/Phlpsnm_Resume.pdf"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>PhilipSanM</h1>
            <h4>Philippians 4:13</h4>
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
        <div className="ryu-img">
          <StaticImage
            src="../assets/images/bochi.png"
            alt="portfolio"
            placeholder="blurred"
            layout="fixed"
            width={500}
            height={600}
          />
        </div>

        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
