import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Octicon, { Home } from "@githubprimer/octicons-react"
import { Flex } from "@primer/components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>NOT FOUND</H1>
    <P>You just hit a route that doesn&#39;t exist... the sadness :(</P>
    <Flex color="blue.2" justifyContent="center">
      <Link to="/">
        <Octicon icon={Home} ariaLabel="Primer home" size="medium" />
      </Link>
    </Flex>
  </Layout>
)

const H1 = styled.h1`
  margin-top: 48px;
  color: #c8e1ff;
  text-align: center;
`

const P = styled.p`
  color: #c8e1ff;
  text-align: center;
`

export default NotFoundPage
