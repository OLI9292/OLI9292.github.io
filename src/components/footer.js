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
  maxWidth: '960px',
  margin: '0 auto',
  marginBottom: '20px',
  marginTop: '20px',
}

const textStyle = {
  fontFamily: 'EBGaramond',
  color: '#D3D3D3',
  fontSize: '14px',
  margin: '5px 0 20px 0',
}

const emailStyle = {
  fontFamily: 'EBGaramond',
  color: '#ffc300',
  fontSize: '14px',
  cursor: 'pointer',
  textDecoration: 'none',
}

const Footer = () => (
  <div style={containerStyle}>
    <div style={dividerStyle} />
    <a href="mailto:info@behumblemovement.com" style={emailStyle}>
      info@behumblemovement.com
    </a>
    <p style={textStyle}>Be Humble &#169;</p>
  </div>
)

export default Footer
