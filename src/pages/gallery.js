import React from 'react'

import Layout from '../components/layout'

import Gallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import YouTube from 'react-youtube'

import pic3 from '../images/gallery/gallery3.jpg'
import pic4 from '../images/gallery/gallery4.jpg'
import pic5 from '../images/gallery/gallery5.jpg'
import pic6 from '../images/gallery/gallery6.jpg'
import pic7 from '../images/gallery/gallery7.png'
import pic8 from '../images/gallery/gallery8.png'

const youtubeOptions = {
  playerVars: {
    modestbranding: 1,
    rel: 0,
    iv_load_policy: 3,
  },
}

const VIDEOS = ['b15bbYcKq6w', 'ujd63n8SBFA']

const images = [pic3, pic4, pic5, pic6, pic7, pic8].map(pic => ({
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
