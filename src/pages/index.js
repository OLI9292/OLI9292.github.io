import React from 'react'
import styled from 'styled-components'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import TESTIMONIALS from '../data/testimonials'

import Layout from '../components/layout'

import main from '../images/main-2.png'
import mainWide from '../images/main-2-wide.png'
import secondary1 from '../images/secondary1.png'
import secondary2 from '../images/secondary2.jpg'
import secondary3 from '../images/secondary3.jpg'

import { scrollIframeIntoView } from '../helpers'

const IFRAME_SOURCE =
  'https://app.acuityscheduling.com/schedule.php?owner=19329515'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 10000,
  slidesToShow: 1,
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { iframeHeight: 0, isMobile: true }
  }

  componentDidMount() {
    this.loadIframeScript()
    this.setResizeInterval()
    this.checkScrollIntoView()
    this.setMainImageInterval()
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
    clearTimeout(this.state.timeout)
  }

  checkScrollIntoView() {
    if (typeof window == 'undefined') return

    const { search } = window.location
    if (!search.includes('?b=t')) return

    const timeout = setTimeout(() => scrollIframeIntoView(), 1250)
    this.setState({ timeout })
  }

  iframe() {
    return document.getElementsByTagName('iframe')[0]
  }

  loadIframeScript() {
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    document.body.appendChild(script)
  }

  resizeIframeContainer() {
    if (!this.iframe()) return

    this.setState({ iframeHeight: this.iframe().clientHeight })
  }

  setMainImage() {
    const breakpoint = 768
    const isMobile = window.innerWidth < breakpoint
    this.setState({ isMobile })
  }

  setResizeInterval() {
    const interval = setInterval(this.resizeIframeContainer.bind(this), 100)
    this.setState({ interval })
  }

  setMainImageInterval() {
    const mainImageInterval = setInterval(this.setMainImage.bind(this), 100)
    this.setState({ mainImageInterval })
  }

  render() {
    return (
      <Layout>
        {this.state.isMobile ? (
          <MainImage src={main} />
        ) : (
          <MainImageWide src={mainWide} />
        )}

        <Tagline>If you fail to plan, you plan to fail.</Tagline>

        <Informatics>
          <Informatic ref="box2">
            <Text marginTop>
              We are experienced motivators and influencers, specializing in
              various aspects of physical and mental fitness.
            </Text>
            <SecondaryImage src={secondary1} />
          </Informatic>

          <Informatic style={{ paddingLeft: '20%', width: '80%' }} ref="box3">
            <Text marginTop>
              From cognitive training, prenatal, Boxing, MMA, Muay Thai, kick
              boxing, kettlebell free flow movement to strength and
              conditioning.
            </Text>
            <SecondaryImage src={secondary2} />
          </Informatic>

          <Informatic style={{ paddingLeft: '40%', width: '100%' }} ref="box4">
            <Text marginTop>
              No matter your fitness goals we have experienced and certified
              trainers to help you set and achieve those goals.
            </Text>
            <SecondaryImage src={secondary3} />
          </Informatic>
        </Informatics>

        <br />
        <br />

        <Header>testimonials</Header>

        <Slider {...settings}>
          {TESTIMONIALS.map((t, i) => (
            <Text key={i}>
              {t.text}
              <br />
              <br />- {t.from}
            </Text>
          ))}
        </Slider>

        <br />
        <br />

        <BookingContainer className="booking-container">
          <HeaderMedium
            style={{
              textAlign: 'center',
              margin: '0',
              color: '#ffc300',
              padding: '40px 0 10px 0',
            }}
          >
            book a session
          </HeaderMedium>

          <div style={{ height: this.state.iframeHeight }}>
            <iframe
              title="Book a Session"
              src={IFRAME_SOURCE}
              width="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </BookingContainer>
      </Layout>
    )
  }
}

const MainImage = styled.img`
  height: auto;
  width: 100%;
`

const MainImageWide = styled.img`
  height: auto;
  width: 150%;
`

const BookingContainer = styled.div`
  background-color: white;
  width: 100%;
  margin: 0 auto;
`

const Informatic = styled.div`
  margin-top: 60px;
  display: flex;
  width: 60%;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    padding: 0 !important;
    border: 0 !important;
    margin-left: 0 !important;
    flex-direction: column;
    width: 100% !important;
  }
`

const Informatics = styled.div`
  margin-top: 270px;
  @media only screen and (max-width: 768px) {
    margin-top: 160px;
  }
`

const Header = styled.h2`
  font-family: Exo;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  color: #ffc300;
`

const HeaderLarge = styled.h1`
  font-family: Exo;
  font-size: 80px;
  font-weight: 900;
  color: #ffc300;
  margin-left: -200px;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    font-size: 50px;
    padding: 10px 0;
  }
`

const HeaderMedium = styled(HeaderLarge)`
  font-size: 60px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`

const SecondaryImage = styled.img`
  width: 55%;
  height: auto;
  margin-left: 10px;
  margin-top: -1px;
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    width: 75%;
  }
`

const Tagline = styled.p`
  font-family: Exo;
  font-style: italic;
  font-size: 24px;
  margin: 0 auto;
  background-color: #ffc300;
  text-align: center;
  padding: 50px 0px;
  position: absolute;
  left: 0;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  width: 100vw;
  margin-top: 70px;
  @media only screen and (max-width: 768px) {
    margin-top: 40px;
    padding: 30px 0px;
    font-size: 20px;
  }
`

const Text = styled.p`
  font-family: EBGaramond;
  font-size: 1.1em;
  margin-top ${p => (p.marginTop ? '10px' : '0')};
`

export default IndexPage
