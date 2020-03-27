import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import './layout.css'

import { scrollIframeIntoView } from '../helpers'

const linkStyle = {
  color: '#ffc300',
  textDecoration: 'none',
}

const Text = styled.p`
  background-color: black;
  border-radius: 50px;
  bottom: 10px;
  color: #ffc300;
  cursor: pointer;
  font-family: Exo;
  font-size: 1.1em;
  letter-spacing: 1px;
  padding: 12px 20px;
  position: fixed;
  right: 20px;
  text-align: center;
  text-transform: uppercase;
  z-index: 1000000;
  transition: 0.2s;
`

const StickyCTA = () => {
  if (typeof window == 'undefined') return null

  return window.location.pathname === '/' ? (
    <Text className="sticky-cta" onClick={() => scrollIframeIntoView()}>
      Book Now
    </Text>
  ) : (
    <Text className="sticky-cta">
      <Link to="/?b=t" style={linkStyle}>
        Book Now
      </Link>
    </Text>
  )
}

export default StickyCTA
