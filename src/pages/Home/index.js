import React, { useState } from "react";
import { BlogItem } from "../../components";
import { Gap } from "../../components/atoms";
import { graphql } from "gatsby"

import "./style.scss"

const Home = ({ data }) => {
  const [count, setCount] = useState(0)

  return (
    <div className="home-wrapper">
      <Gap height={30} />
      <div className="content-wrapper d-flex flex-wrap">
				{[1, 2, 3, 4, 5, 6].map(e => {
					return (
        		<BlogItem class="mb-2" />
					)
				})}
      </div>
      <Gap height={30} />
    </div>
  )
}


export default Home