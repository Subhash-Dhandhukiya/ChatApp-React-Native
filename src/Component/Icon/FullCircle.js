import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FullCircle(props) {
  return (
    <Svg
      height="512pt"
      viewBox="0 0 512 512"
      width="512pt"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 0"
        fill="#2196f3"
      />
      <Path
        d="M385.75 201.75L247.082 340.414c-4.16 4.16-9.621 6.254-15.082 6.254s-10.922-2.094-15.082-6.254l-69.332-69.332c-8.344-8.34-8.344-21.824 0-30.164 8.34-8.344 21.82-8.344 30.164 0l54.25 54.25 123.586-123.582c8.34-8.344 21.82-8.344 30.164 0 8.34 8.34 8.34 21.82 0 30.164zm0 0"
        fill="#fafafa"
      />
    </Svg>
  )
}

export default FullCircle;