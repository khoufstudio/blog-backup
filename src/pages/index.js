import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
    
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
<div style={{ textAlign: 'center'}}>
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginRight: 'auto', marginLeft: 'auto' }}>
    <Image />
    <p style={{ fontFamily: 'Open Sans', fontWeight: 600, fontSize: 30, letterSpacing: 1.5}}>khoufstudio</p>
  </div>
  <div style={{ maxWidth: `600px`, marginTop: `3rem`, marginRight: 'auto', marginLeft: 'auto' }}>
    <p style={{fontFamily: 'Monospace', fontSize: 14, lineHeight: 0.5}}>
      Thanks for visiting us, unfortunately this site is under construction. 
    </p>
    <p style={{fontFamily: 'Monospace', fontSize: 14, lineHeight: 0.5}}>
      We hope you be patient and visiting us again next time.
    </p>

    <div>👍👍👍👍👍</div>
  </div>
</div>
)

export default IndexPage
