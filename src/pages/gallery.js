import React from 'react'

import Layout from '../components/layout'

import Gallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import YouTube from 'react-youtube'

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

const VIDEOS = ['db-P2g-Ggxw', '5Lt8hB9ib2o', 'HY05H3lCPXY']

const images = [pic2, pic3, pic4, pic5].map(pic => ({
  original: pic,
  thumbnail: pic,
}))

const styles = {
  header: {
    fontFamily: 'Exo',
    fontWeight: 900,
    color: '#ffc300',
  },
  box: {
    margin: '40px 20px',
  },
}

class GalleryPage extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  render() {
    return (
      <Layout>
        <h1 style={styles.header}>Images</h1>

        <div style={styles.box}>
          <Gallery showPlayButton={false} items={images} />
        </div>

        <br />

        <h1 style={styles.header}>Videos</h1>

        {VIDEOS.map(id => (
          <div style={styles.box} className="video">
            <YouTube
              key={id}
              videoId={id}
              opts={youtubeOptions}
              onReady={this._onReady}
            />
          </div>
        ))}
      </Layout>
    )
  }
}

export default GalleryPage
