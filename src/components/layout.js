/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MessengerCustomerChat from "react-messenger-customer-chat"

import "./layout.css"
import Nav from "../components/nav"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Nav />
        <main>{children}</main>
        <MessengerCustomerChat
          pageId="2130846410546360"
          themecolor="#000000"
          appId="401910847061249"
          loggedInGreeting="Hey internet visitor! Feel free ask me anything."
          loggedOutGreeting="Hey internet visitor! Feel free ask me anything."
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
