import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://github.com/sponsors/PhilipSanM/button"
          title="Sponsor PhilipSanM"
          height="32"
          width="114"
          style={{
            border: "0",
            borderRadius: "6px",
            margin: "auto",
          }}
        ></iframe>
      </div>
      <br />
      <br />

      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
