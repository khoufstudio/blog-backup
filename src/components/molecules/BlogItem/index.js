import React from "react";
import "./style.scss"
import { BgBlog1 } from "../../../assets"
import { Gap, TagBlog } from "../../atoms"

const BlogItem = (props) => {
  return (
    <div className="blog-item-wrapper flex-fill mb-5 mb-md-0">
      <div className="blog-item-image-wrapper">
        <img alt="test" src={BgBlog1} />
      </div>
      <div className="blog-item-description-wrapper">
        <a href="#" className="blog-title">RESTFUL API Menggunakan Go</a>
				<div className="blog-item-detail-wrapper d-flex mt-2">
				  <p className="m-0">By Admin</p>
					<Gap className="mx-2 p-0" width={1}/>
					<p className="m-0">5 minute read</p>
				</div>
				<div className="blog-tags-container d-flex mt-2">
					<TagBlog label="Go"/>	
					<Gap width={5} />
					<TagBlog label="REST" />	
					<Gap width={5} />
				</div>
      </div>
		</div>
  )
}

export default BlogItem
