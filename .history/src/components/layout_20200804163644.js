import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'

const Layout = props => {
  return (
    <>
      {/* Reescribo el codigo superior del html */}
      <Helmet></Helmet>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
