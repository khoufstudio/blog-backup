import React from "react";

const Gap = ({height, width, ...args}) => {
  return (
    <div {...args } style={{width, height}}></div>
  )
}

export default Gap
