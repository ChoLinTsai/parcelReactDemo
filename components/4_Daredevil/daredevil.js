import React, {Component} from "react";
import ReactDOM from "react-dom";
import style from './daredevil.scss';
import Youtube from "react-youtube"

export default class Daredevil extends Component {

  constructor(props) {

    super(props);

    this.state = {
      style: {
        opacity: 0.25
      },
      iframeId: "iframe",
      videoSrc: "https://www.youtube.com/embed/",
      videoId: "2Cn3DVV0LHY",
      enableJS: "?enablejsapi=1"
    }

  }


  componentDidMount() {
    let loadYT;
    if (!loadYT) {
      loadYT = new Promise( (resolve) => {
        let tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);

      })
    }

    loadYT.then( (YT) => {
      this.player = new YT.Player(this.state.iframeId, {
        events: {
          onStateChange: this.playerStateChanged
        }
      })
    })

  }

  playerStateChanged(e) {
    console.log(e.data);
  }



  mouseOver() {
    this.setState({
      style: {
        opacity: 1
      }
    })

    this.player.playVideo();
  }

  mouseLeave() {
    this.setState({
      style: {
        opacity: 0.25
      }
    });

    this.player.pauseVideo();
  }

  render() {

    return (
      <section className={style.daredevilContent}>

        <iframe
          id={this.state.iframeId}
          src={`${this.state.videoSrc}${this.state.videoId}${this.state.enableJS}`}
          frameBorder="0"
          style={this.state.style}
          onMouseOver={ () => this.mouseOver() }
          onMouseLeave={ () => this.mouseLeave() } >

        </iframe>

      </section>
    );
  }
}
