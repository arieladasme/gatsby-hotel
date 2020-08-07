import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import Header from './header'
import Footer from './footer'

const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 60%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 18px;
            font-size: 1.7rem;
            line-height: 1.5;
            font-family: 'Noto Sans', sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: 'Roboto', serif;
          }
          h3 {
            font-family: 'Noto Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      {/* Reescribo el codigo superior del html */}
      <Helmet>
        <title>Hotel Gatsby</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100&display=swap&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
