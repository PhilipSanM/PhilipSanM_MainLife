import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../components/Title"

import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Recipes" />

      <main className="recipes-page">
        <div className="recipes-container" align="center">
          <Title title="Recipes" />
          <h2>Sorry, run out of ingredients</h2>

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
