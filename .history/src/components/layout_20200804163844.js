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
      </Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
