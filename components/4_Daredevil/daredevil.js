import React, {Component} from "react";
import ReactDOM from "react-dom";
import style from './daredevil.scss';
import Youtube from "react-youtube"

class Daredevil extends Component {

  componentWillMount() {
    window.addEventListener('scroll', () => this.onScroll(), true);
  }

  onScroll() {
    let videoNode = ReactDOM.findDOMNode(this.refs.video);
    let windowY = window.scrollY;
    console.log(videoNode.offsetTop);
    console.log(windowY);
  }

  videoOn() {
    console.log("Video on Play");
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
          onPause={this.videoPause}
          ref="video" />
      </section>
    );
  }
}

export default Daredevil;
