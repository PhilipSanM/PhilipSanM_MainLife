import React from "react"
import Title from "./Title"

const Stats = () => {
  return (
    <div style={{ marginTop: "90px", marginBottom: "90px" }}>
      {/* statst */}
      <Title title={"stats"} />

      <div id="Tools" align="middle">
        {/* <a href="https://www.javascript.com/">
          <img
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            alt="JavaScript"
          />
        </a> */}
        <a href="https://www.python.org">
          <img
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            alt="Python"
          />
        </a>
        <a href="https://www.postgresql.org/">
          <img
            src="https://img.shields.io/badge/SQL-5406C1.svg?style=for-the-badge&logo=postgresql&logoColor=white"
            alt="postgres"
          />
        </a>
        <a href="https://www.r-project.org/">
          <img
            src="https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white"
            alt="r"
          />
        </a>
        <a href="https://en.cppreference.com/w/cpp/11">
          <img
            src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="cplus"
          />
        </a>
        <a href="https://julialang.org/">
          <img
            src="https://img.shields.io/badge/julia-3670A0?style=for-the-badge&logo=julia&logoColor=ffdd54"
            alt="julia"
          />
        </a>

        <a href="https://www.tensorflow.org/tfx?hl=es-419">
          <img
            src="https://img.shields.io/badge/TFX-2238ff.svg?style=for-the-badge&logo=tensorflow&logoColor=white"
            alt="TFX"
          />
        </a>
        <a href="https://www.tensorflow.org/tfx?hl=es-419">
          <img
            src="https://img.shields.io/badge/Tensorflow-DFA644.svg?style=for-the-badge&logo=tensorflow&logoColor=white"
            alt="Tensorflow"
          />
        </a>
        <a href="https://mlflow.org/">
          <img
            src="https://img.shields.io/badge/MLflow-E41EEB.svg?style=for-the-badge&logo=mlflow&logoColor=white"
            alt="MLflow"
          />
        </a>

        <a href="https://git-scm.com/">
          <img
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
            alt="Git"
          />
        </a>
        <a href="https://www.linux.org/">
          <img
            src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
            alt="Linux"
          />
        </a>

        <a href="https://www.docker.com">
          <img
            src="https://img.shields.io/badge/Docker-%231572B6.svg?style=for-the-badge&logo=docker&logoColor=white"
            alt="Docker"
          />
        </a>
        <a href="https://azure.microsoft.com/en-us/">
          <img
            src="https://img.shields.io/badge/azure-0098d7.svg?style=for-the-badge&logo=azure&logoColor=purple"
            alt="Azure"
          />
        </a>
        <a href="https://fastapi.tiangolo.com/">
          <img
            src="https://img.shields.io/badge/FastAPI-08D5AC.svg?style=for-the-badge&logo=fastapi&logoColor=white"
            alt="FastAPI"
          />
        </a>
      </div>
      <br />
      <br />

      <div className="github-stats">
        <img
          src="https://github-readme-stats.vercel.app/api/?username=PhilipSanM&count_private=true&theme=vision-friendly-dark&showicons=true"
          alt="GitHub Stats"
          align="center"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=PhilipSanM&layout=compact&theme=vision-friendly-dark"
          alt="Top Languages"
          align="center"
        />
        <img
          src="http://github-readme-streak-stats.herokuapp.com?user=PhilipSanM&theme=vision-friendly-dark&date_format=j%20M%5B%20Y%5D"
          alt="GitHub Streak"
          align="center"
        />
      </div>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://github.com/sponsors/PhilipSanM/card"
          title="Sponsor PhilipSanM"
          height="225"
          width="600"
          style={{
            border: 0,
            borderRadius: "6px",
            margin: "auto",
          }}
        ></iframe>
      </div>
    </div>
  )
}

export default Stats
