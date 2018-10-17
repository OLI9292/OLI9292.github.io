import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import team from '../images/team.jpg'

const emailStyle = {
  color: '#ffc300',
}

const ContactPage = () => (
  <Layout>
    <img style={styles.bannerImage} src={team} />
    <h1 style={styles.header}>Jay Mark</h1>
    <ul style={styles.text}>
      <li>Certified Personal Trainer</li>
      <li>Owner Be Humble Movement</li>
      <li>
        Pro Fighter, Mixed Martial Artist, Muay Thai & Kickboxing Champion{' '}
      </li>
      <li>ECF MMA 2x Champion</li>
      <li>NYFE MMA Champion</li>
    </ul>
    <p style={styles.text}>
      I have over 10+ years in the Fitness industry and the mix martial arts
      world. My passion is to teach the importance of health and fitness to
      others while providing my knowledge in both exercise and nutrition. I take
      pride knowing that, I've helped hundred's of clients reach their fitness
      goals and improve their health through diet and exercise.
    </p>
    <br />
    <p style={styles.text}>
      Email me at{' '}
      <a href="mailto:info@behumblemovement.com" style={emailStyle}>
        info@behumblemovement.com
      </a>
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
