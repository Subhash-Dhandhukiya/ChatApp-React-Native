import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Circle(props) {
  return (
    <Svg
      height={512}
      viewBox="0 0 74 74"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M37 72a35 35 0 1135-35 35.04 35.04 0 01-35 35zm0-68a33 33 0 1033 33A33.037 33.037 0 0037 4z" />
    </Svg>
  )
}

export default Circle