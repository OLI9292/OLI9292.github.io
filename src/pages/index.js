import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import main from '../images/main.jpg'
import coaching from '../images/coaching.jpg'
import competition from '../images/competition.jpg'
import lifestyle from '../images/lifestyle.jpg'

const IndexPage = () => (
  <Layout>
    <div style={styles.flexed}>
      <img style={styles.mainImage} src={main} />
      <h1 style={styles.beHumble}>be humble</h1>
    </div>

    <div style={styles.informatic}>
      <div>
        <h3 style={styles.title}>coaching</h3>
        <p style={styles.text}>
          I offer personal training to clients in New York City.
        </p>
      </div>
      <img style={styles.secondaryImage} src={coaching} />
    </div>

    <div style={styles.informatic}>
      <img
        style={Object.assign({ marginRight: '25px' }, styles.secondaryImage)}
        src={competition}
      />
      <div>
        <h3 style={styles.title}>competition</h3>
        <p style={styles.text}>
          The Be Humble fight team competes in martial arts competitions in and
          around the city.
        </p>
      </div>
    </div>

    <div style={styles.informatic}>
      <div>
        <h3 style={styles.title}>lifestyle</h3>
        <p style={styles.text}>
          Be humble is a brand promoting living a healthy lifestyle with
          confidence and humility.
        </p>
      </div>
      <img style={styles.secondaryImage} src={lifestyle} />
    </div>
  </Layout>
)

const styles = {
  flexed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  informatic: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  mainImage: {
    minHeight: '70vh',
    minWidth: '70vh',
    maxWidth: '70vh',
    maxHeight: '70vh',
    width: 'auto',
    height: 'auto',
  },
  beHumble: {
    fontFamily: 'Exo',
    fontSize: '90px',
    fontWeight: '900',
    color: '#FFC300',
    marginLeft: '-60px',
  },
  title: {
    fontFamily: 'Exo',
    fontWeight: '900',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  text: {
    fontFamily: 'EBGaramond',
  },
  secondaryImage: {
    width: '45vw',
    height: 'auto',
  },
}

export default IndexPage
