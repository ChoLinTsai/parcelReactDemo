import React, { Component } from 'react';
import style from './iron.scss';
import Youtube from "react-youtube"

class Iron extends Component {
  render() {
    const opts = {
      width: '640',
      height: '360',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <section className={style.ironContent}>
        <Youtube
          videoId="f9OKL5no-S0"
          opts={opts} 
          onPlay={() => this.videoOn()}
          onPause={this.videoPause}
          ref="video" />
      </section>
    )
  }
}

export default Iron;
