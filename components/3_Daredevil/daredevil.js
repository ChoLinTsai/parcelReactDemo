import React, { Component } from 'react';
import daredevil from './daredevil.scss';
import Youtube from "react-youtube"

class Daredevil extends Component {
	render() {
		const opts = {
			width: '640',
			height: '360',
      playerVars: {
        autoplay: 0
      }
		}

		return (
			<section>
				<Youtube
					videoId="2Cn3DVV0LHY"
					opts={opts}
				/>
			</section>
		);
	}
}

export default Daredevil;
