import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Links = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  align-items: center;
  padding: 40px 0;
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
`

const StyledLink = styled.p`
  font-family: exo;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
}

const Header = () => (
  <Links>
    <StyledLink>
      <Link to="/" style={Object.assign({ marginRight: '25px' }, linkStyle)}>
        home
      </Link>
    </StyledLink>
    <StyledLink>
      <Link to="/contact " style={linkStyle}>
        contact
      </Link>
    </StyledLink>
  </Links>
)

export default Header
