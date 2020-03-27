import React from 'react'

import Layout from '../components/layout'

import team from '../images/team.jpg'

const emailStyle = {
  color: '#ffc300',
}

const ContactPage = () => (
  <Layout>
    <img alt="background" style={styles.bannerImage} src={team} />
    <h1 style={styles.header}>Jay Mark</h1>
    <ul style={styles.text}>
      <li>Certified Personal Trainer</li>
      <li>Owner Be Humble Movement</li>
      <li>
        Bellator Pro Fighter, Mixed Martial Artist, Muay Thai & Kickboxing
        Champion
      </li>
      <li>ECF MMA 2x Champion</li>
      <li>NYFE MMA Champion</li>
    </ul>
    <p style={styles.text}>
      Jay Mark has over 10+ years in the fitness industry and the mix martial
      arts world. His passion is teaching others the importance of health and
      fitness and providing knowledge in exercise and nutrition. Jason takes
      pride in having helped hundreds of clients reach their fitness goals and
      improve their health through diet and exercise.
    </p>
    <br />
    <p style={styles.text}>
      For more information email{' '}
      <a href="mailto:info@behumblemovement.com" style={emailStyle}>
        info@behumblemovement.com
      </a>
    </p>
  </Layout>
)

const styles = {
  bannerImage: {
    maxWidth: '100%',
    maxHeight: '350px',
    width: 'auto',
    height: 'auto',
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
