import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
