import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from './daredevil.scss';
import Youtube from "react-youtube"

class Daredevil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        opacity: 0.25
      },
      isPlaying: false,
      isPause: true
    }
  }

  showUp() {
    this.setState({
      style: {
        opacity: 1
      }
    })

    console.log(this);
    this.refs.video.playVideo();
    
  }

  hideOff(e) {
    this.setState({
      style: {
        opacity: 0.25
      }
    });

  }


  videoOn() {

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

    return(
      <section className={style.daredevilContent}>

        <div
          style={this.state.style}
          onMouseOver={ () => this.showUp() }
          onMouseLeave= { (e) => this.hideOff(e) } >

            <Youtube
              ref="video"
              videoId="2Cn3DVV0LHY"
              opts={opts}
              onPlay={() => this.videoOn()}
              onPause={ () => this.videoPause()} />

        </div>

      </section>
    );
  }
}

export default Daredevil;
