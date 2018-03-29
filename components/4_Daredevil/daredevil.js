import React, {Component} from 'react';
import style from './daredevil.scss';
import Youtube from "react-youtube"

class Daredevil extends Component {

  videoOn() {
    console.log("this.state.onPlay");
  }

  videoPause() {
    console.log("Video Paused");
  }

  render() {
    const opts = {
      width: '640',
      height: '360',
      playerVars: {
        autoplay: 0
      }
    }

    return (
		<section className={style.daredevilContent}>
      <Youtube
				videoId="2Cn3DVV0LHY"
				opts={opts}
				onPlay={() => this.videoOn()}
				onPause={this.videoPause}/>
    </section>
		);
  }
}

export default Daredevil;
