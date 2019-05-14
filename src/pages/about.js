import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Chris Wood" keywords={[`web`, `developer`, `portfolio`, `react`]} />
    <h1>About Me</h1>
    <Main />
  </Layout>
)

export default AboutPage
