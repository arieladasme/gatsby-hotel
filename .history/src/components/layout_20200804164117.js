import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'

const Layout = props => {
  return (
    <>
      {/* Reescribo el codigo superior del html */}
      <Helmet>
        <title>Hotel Gatsby</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
