import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function VerticalDotIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={64} />
      <Circle cx={256} cy={448} r={64} />
      <Circle cx={256} cy={64} r={64} />
    </Svg>
  )
}

export default VerticalDotIcon