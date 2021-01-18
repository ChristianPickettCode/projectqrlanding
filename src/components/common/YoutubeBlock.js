import React from 'react'
import PropTypes from 'prop-types';

import YouTube from 'react-youtube';


function YoutubeBlock(props) {
        const opts = {
          height: '169',
          width: '300',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };

        const videoOnReady = (event) => {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
            console.log(event.target);
        }
        const {videoId} = props;
        return (
            <YouTube videoId={videoId} opts={opts} onReady={videoOnReady} />
        );
}

YoutubeBlock.propTypes = {

}

export default YoutubeBlock

