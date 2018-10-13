import React from 'react'

import styled from 'styled-components'

try {
  import sr from '../components/scrollReveal'
} catch (e) {
  console.log(e)
}

import Layout from '../components/layout'

import main from '../images/main.jpg'
import coaching from '../images/coaching.jpg'
import competition from '../images/competition.jpg'
import lifestyle from '../images/lifestyle.jpg'

const scrollConfig = origin => ({
  origin,
  duration: 1000,
  delay: 150,
  distance: '500px',
  scale: 1,
  easing: 'ease',
})

const Flexed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Informatic = styled.div`
  margin-top: 110px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    margin-top: 40px;
    flex-direction: ${p => `column${p.reverse ? '-reverse' : ''}`};
  }
`

const MainImage = styled.img`
  min-height: 70vh;
  min-width: 70vh;
  max-width: 70vh;
  max-height: 70vh;
  width: auto;
  height: auto;
  @media only screen and (max-width: 768px) {
    min-height: 60vh;
    min-width: 60vh;
    max-width: 60vh;
    max-height: 60vh;
  }
`

const BeHumble = styled.h1`
  font-family: Exo;
  font-size: 90px;
  font-weight: 900;
  color: #ffc300;
  margin-left: -60px;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    font-size: 50px;
    padding: 10px 0;
  }
`

const Title = styled.h4`
  font-family: Exo;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Text = styled.p`
  font-family: EBGaramond;
`
const SecondaryImage = styled.img`
  width: 45vw;
  height: auto;
  margin-right: ${p => (p.marginRight ? '25px' : '')};
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 65vw;
  }
`

export class IndexPage extends React.Component {
  componentDidMount = () => {
    const config = {}

    if (sr) {
      sr.reveal(this.refs.box2, scrollConfig('left'))
      sr.reveal(this.refs.box3, scrollConfig('right'))
      sr.reveal(this.refs.box4, scrollConfig('left'))
    }
  }

  render() {
    return (
      <Layout>
        <Flexed>
          <MainImage src={main} />
          <BeHumble>be humble</BeHumble>
        </Flexed>

        <Informatic ref="box2">
          <div>
            <Title>coaching</Title>
            <Text>I offer personal training to clients in New York City.</Text>
          </div>
          <SecondaryImage src={coaching} />
        </Informatic>

        <Informatic reverse={true} ref="box3">
          <SecondaryImage marginRight={true} src={competition} />
          <div>
            <Title>competition</Title>
            <Text>
              The Be Humble fight team competes in martial arts competitions in
              and around the city.
            </Text>
          </div>
        </Informatic>

        <Informatic ref="box4">
          <div>
            <Title>lifestyle</Title>
            <Text>
              Be humble is a brand promoting living a healthy lifestyle with
              confidence and humility.
            </Text>
          </div>
          <SecondaryImage src={lifestyle} />
        </Informatic>
      </Layout>
    )
  }
}

export default IndexPage
