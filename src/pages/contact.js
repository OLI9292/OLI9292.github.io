import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import team from '../images/team.jpg'

const ContactPage = () => (
  <Layout>
    <img style={styles.bannerImage} src={team} />
    <h1 style={styles.header}>Jaymark</h1>
    <p style={styles.text}>
      For the past X years I have been a coach at UFC Gym Soho. I have
      experience in kickboxing, muay thai, and grappling and have competed in
      over Y martial arts competitions.
    </p>
  </Layout>
)

const styles = {
  bannerImage: {
    width: '100%',
    margin: '0 auto',
  },
  header: {
    fontFamily: 'Exo',
    fontWeight: '900',
    color: '#FFC300',
    margin: '20px 0px',
  },
  text: {
    fontFamily: 'EBGaramond',
  },
}

export default ContactPage
