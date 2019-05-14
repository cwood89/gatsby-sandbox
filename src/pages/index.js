import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Chris Wood" keywords={[`web`, `developer`, `portfolio`, `react`]} />
    <Main />
  </Layout>
)

export default IndexPage
