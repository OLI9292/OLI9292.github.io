import React from 'react'
import { Link } from 'gatsby'

const linkStyle = {
  fontFamily: 'exo',
  color: 'black',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontSize: '20px',
}

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={Object.assign({ marginRight: '25px' }, linkStyle)}>
          home
        </Link>
        <Link to="/contact " style={linkStyle}>
          contact
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
