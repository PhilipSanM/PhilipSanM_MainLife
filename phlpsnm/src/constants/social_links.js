import React from "react"

import { SiLeetcode } from "@react-icons/all-files/Si/SiLeetcode"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaKaggle } from "@react-icons/all-files/fa/FaKaggle"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"
// import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail"

const data = [
  {
    id: 1,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/PhilipSanM_",
  },
  {
    id: 2,
    icon: <SiLeetcode className="social-icon"></SiLeetcode>,
    url: "https://leetcode.com/PhilipSanM",
  },
  {
    id: 3,
    icon: <FaKaggle className="social-icon"></FaKaggle>,
    url: "https://www.kaggle.com/philipsanm",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/PhilipSanM",
  },
  {
    id: 5,
    icon: <IoMdMail className="social-icon"></IoMdMail>,
    url: "mailto:phlpsnm@gmail.com",
  },
]

export default data
