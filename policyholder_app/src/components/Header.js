import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>Policyholder Blockchain Insurance</h1>
        <Link style={linkStyle} to="/">Home</Link>
      </header>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'right',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'

}

const titleStyle = {
  textAlign: 'left'
}

export default Header;