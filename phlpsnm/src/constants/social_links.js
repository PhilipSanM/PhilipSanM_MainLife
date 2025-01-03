import React from "react"

import { SiLeetcode } from "@react-icons/all-files/Si/SiLeetcode"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaKaggle } from "@react-icons/all-files/fa/FaKaggle"
// import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"
// import { FaXTwitter } from "@react-icons/all-files/fa6/FaXTwitter"
// import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
// import { FaXTwitter } from "react-icons/fa6/FaXTwitter"
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail"

const data = [
  // {
  //   id: 1,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: "https://twitter.com/PhilipSanM_",
  // },
  {
    id: 1,
    icon: <SiLeetcode className="social-icon"></SiLeetcode>,
    url: "https://leetcode.com/PhilipSanM",
  },
  {
    id: 2,
    icon: <FaKaggle className="social-icon"></FaKaggle>,
    url: "https://www.kaggle.com/philipsanm",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/PhilipSanM",
  },
  {
    id: 4,
    icon: <IoMdMail className="social-icon"></IoMdMail>,
    url: "mailto:phlpsnm@gmail.com",
  },
]

export default data
