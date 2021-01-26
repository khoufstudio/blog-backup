import React from 'react'
import { Header, Footer, Gap } from "../../components"
import "./index.scss"
import { BgBlog2 } from "../../assets"

const BlogPost = () => {
	return (
		<div className="main-wrapper-blogpost">
			<Header />
			<div className="blogpost-wrapper container">
				<Gap height={30} />
			  <h1>RESTFUL API menggunakan Golang</h1>
				<div className="subtitle">
					<span className="subtitle-item author">By Admin</span>
					<span className="subtitle-item read-time">5 minutes</span>
					<span className="subtitle-item date">11 Januari</span>
				</div>
				<hr />
				<div className="blogpost-image-wrapper text-center my-5">
					<img alt="test" src={BgBlog2} />
				</div>
				<div className="blogpost-content">
				<p className="text-justify">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<p className="text-justify">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
   		</div>	
				<div class="next-page-wrapper container text-right">
				  <hr className="mb-0" />
					<Gap height={30} />
				  <a href="#">Membuat Login Menggunakan ReactJS #1</a>
					<Gap height={30} />
				</div>
			<Footer />
		</div>
	)
}

export default BlogPost
