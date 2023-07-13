import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import { StaticImage } from "gatsby-plugin-image"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Services from "../components/Services"
import WelcomeMessage from "../components/WelcomeAnimation"
import Seo from "../components/Seo"
import Stats from "../components/Stats"
const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <Seo title="Home" />
      <main>
        <WelcomeMessage />
        <Hero />
        <Jobs />

        <Services />
        <Stats />

        <Projects title="featured projects" showLink projects={projects} />

        <StaticImage
          src="http://github-readme-streak-stats.herokuapp.com?user=PhilipSanM&theme=vision-friendly-dark&date_format=j%20M%5B%20Y%5D"
          alt="pslio"
          // className="hero-img"
          placeholder="blurred"
          layout="fixed"
          width={500}
          height={600}
        />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default IndexPage
