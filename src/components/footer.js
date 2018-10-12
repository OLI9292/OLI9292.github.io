import React from 'react'
import { Link } from 'gatsby'

const containerStyle = {
  width: '95%',
  margin: '0 auto',
  textAlign: 'center',
}

const dividerStyle = {
  height: '1px',
  boxSizing: 'border-box',
  backgroundColor: '#D3D3D3',
  marginBottom: '20px',
}

const textStyle = {
  fontFamily: 'EBGaramond',
  color: '#D3D3D3',
  fontSize: '14px',
}

const Footer = () => (
  <div style={containerStyle}>
    <div style={dividerStyle} />
    <p style={textStyle}>Be Humble &#169;</p>
  </div>
)

export default Footer
