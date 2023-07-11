import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />

      <main className="error-page">
        <div className="error-container">
          <h1>404</h1>
          <Link to="/" className="btn">
            back home
          </Link>
          <StaticImage
            src="../assets/images/nop.png"
            alt="nop"
            // className="hero-img"
            placeholder="blurred"
            layout="fixed"
            width={500}
            height={600}
          />
        </div>
      </main>
    </>
  )
}

export default Error
