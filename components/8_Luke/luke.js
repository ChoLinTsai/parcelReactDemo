import React, { Component } from 'react';
import style from './Luke.scss';
import Youtube from "react-youtube"

class Luke extends Component {
  render() {
    const opts = {
      width: '640',
      height: '360',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <section className={style.lukeContent}>
      <Youtube
        videoId="FU4Xn__5Qjg"
        opts={opts}
        onPlay={() => this.videoOn()}
        onPause={this.videoPause}
        ref="video" />
      </section>
    )
  }
}

export default Luke;
