import React from "react"
// import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

import { SiIbm } from "@react-icons/all-files/Si/SiIbm"
import { FaMicrosoft } from "@react-icons/all-files/fa/FaMicrosoft"

const services = [
  {
    id: 1,
    icon: <SiIbm className="service-icon" />,
    title: "IBM zAmbassador Captain",
    text: `The IBM zSystems mainframe technology powers the world's biggest businesses. It is EVERYWHERE around you. IBM zSystems powers ATM cards, credit cards, airline reservations, hotel reservations, retail shopping & so much more!`,
  },
  {
    id: 2,
    icon: <FaMicrosoft className="service-icon" />,
    title: "MLSA",
    text: "Microsoft Learn Student Ambassador aimed at students who are passionate about technology and want to share their knowledge with others. It offers opportunities to learn, grow, and connect with like-minded individuals in the technology industry.",
  },
]

export default services
