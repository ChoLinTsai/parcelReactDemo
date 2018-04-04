import React, { Component } from 'react';
import style from './defenders.scss';
import Youtube from "react-youtube";


class Defenders extends Component {
  render() {
    const opts = {
      width: '800',
      height: '450',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <section className={style.defendersContent}>
        <Youtube
          videoId="4h3m7B4v6Zc"
          opts={opts}
          onPlay={() => this.videoOn()}
          onPause={this.videoPause}
          ref="video" />
      </section>
    )
  }
}

export default Defenders;
