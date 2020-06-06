import React from "react"
// import { Link } from "gatsby"
import Styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'

const Page = Styled.div`
  display: block;
  position: relative;
  width: 100%;
`


const IndexPage = () => (
  <Page>
    <Layout>
      <SEO title="Home" />

      <Header />

      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>

    </Layout>

  </Page>
)

export default IndexPage
