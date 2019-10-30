import React from 'react'

import './layout.css'
import '../styles/main.scss'
import Container from 'reactstrap/lib/Container'

const Layout: React.SFC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
