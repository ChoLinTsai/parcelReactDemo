import React, {Component} from 'react';
import style from './jessica.scss';
import Youtube from "react-youtube"

class Jessica extends Component {

  render() {
    const opts = {
      width: '640',
      height: '360',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <section className={style.jessicaContent}>
        <Youtube
          videoId="hSvnepZS26s"
          opts={opts}
          onPlay={() => this.videoOn()}
          onPause={this.videoPause}
          ref="video" />
      </section>
    )
  }
}

export default Jessica;
