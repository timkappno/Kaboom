import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Journeys in React</h1>
    <p>Documenting the progress that I make journeying on the way to React.</p>
    <p>Let's 'Now go build something great.'!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
