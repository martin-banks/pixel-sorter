/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Styled from 'styled-components'

// import Header from "./header"
// import "./layout.css"
import BackgroundGrid from '../components/backgrounds/isometric-grid'


const theme = typeof window !== 'undefined'
  ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    : 'dark'

const LayoutWrapper = Styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  padding-top: 20rem;
`

const Main = Styled.main`
  margin: 0 auto;
  width: 100%;
  padding: 4rem;
  box-sizing: border-box;
`

const Footer = Styled.footer`
  box-sizing: border-box;
  display: block;
  bottom: 0;
  width: 100%;
  padding: 2rem 0 2rem 0;
  margin-top: 3rem;
  text-align: center;
  border-top: solid 1px;
  align-self: flex-end;
  justify-self: flex-end;
  margin-top: auto;
  font-size: 1.5rem;
  background: rgba(0,0,0, 0.4);
  a {
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(0,0,0, 0.3);
    border-color: rgba(255,255,255, 0.2);
    color: rgba(255,255,255, 0.4) !important;
    a {
      color: rgba(255,255,255, 0.4) !important;
    }
  }

  @media (prefers-color-scheme: light) {
    background: rgba(255,255,255, 0.6);
    border-color: rgba(0,0,0, 0.1);
    color: rgba(0,0,0, 0.4) !important;
    a {
      color: rgba(0,0,0, 0.4) !important;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <BackgroundGrid theme={ theme } />
      <LayoutWrapper>
        <Main>{ children }</Main>
        <Footer>
          ©<a href="https://www.martinbanks.com.au">Martin Banks</a> { new Date().getFullYear() }
        </Footer>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
