import React from "react"
// import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

import { FaCode } from "@react-icons/all-files/fa/FaCode"
import { FaSketch } from "@react-icons/all-files/fa/FaSketch"
import { FaAndroid } from "@react-icons/all-files/fa/FaAndroid"

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "lmao",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "nop",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "ali",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

export default services
