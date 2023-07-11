import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import Seo from "../../components/Seo"
const ProjectTemplate = ({ pageContext: { title }, data }) => {
  return (
    <>
      {/* <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.description}
        image={data.strapiProject.image.publicURL}
      /> */}
      <div className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
        <GatsbyImage
          image={getImage(data.strapiProject.image.localFile)}
          alt={title}
          className="project-template-img"
        />
      </div>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
