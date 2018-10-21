import React from 'react'
import Gallery from 'react-image-gallery'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import Layout from '../components/layout'

import pic1 from '../images/gallery/gallery1.jpg'
import pic2 from '../images/gallery/gallery2.jpg'
import pic3 from '../images/gallery/gallery3.jpg'
import pic4 from '../images/gallery/gallery4.jpg'
import pic5 from '../images/gallery/gallery5.jpg'

const youtubeOptions = {
  playerVars: {
    modestbranding: 1,
    rel: 0,
    iv_load_policy: 3,
  },
}

const VIDEOS = ['Fvoz_ev7aFc', '1tqrR6mRpXo', 'Ncsexm287E8']

const images = [pic1, pic2, pic3, pic4, pic5].map(pic => ({
  original: pic,
  thumbnail: pic,
}))

const Header = styled.h1`
  font-family: Exo;
  font-weight: 900;
  color: #ffc300;
`

const Box = styled.div`
  margin: 40px 20px;
`

class GalleryPage extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  render() {
    return (
      <Layout>
        <Header>Images</Header>

        <Box>
          <Gallery showPlayButton={false} items={images} />
        </Box>

        <br />

        <Header>Videos</Header>

        {VIDEOS.map(id => (
          <Box className="video">
            <YouTube
              key={id}
              videoId={id}
              opts={youtubeOptions}
              onReady={this._onReady}
            />
          </Box>
        ))}
      </Layout>
    )
  }
}

export default GalleryPage
