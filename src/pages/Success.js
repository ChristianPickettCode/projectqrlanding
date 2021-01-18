import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import YoutubeBlock from '../components/common/YoutubeBlock';

import qrPNG from '../utils/imgs/frame.png';
import frownPNG from '../utils/imgs/frown.png';

const Success = props => {
    return (
        <Fragment>
            <div id="home" className="page-full">
                <h2 className="slogan" style={{margin:'auto'}}>
                    Congratulations! You successfully checked in...
                </h2>

                <p>
		            Did you know that you can create a QR Code of your very own? Yes! It's so easy just click below, enter a name, and start scanning.
                </p>

                <div className="button-container full medium">
                    <a href="/" className="button" target="_blank">
                        Create QR  Code
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

Success.propTypes = {

}

export default Success
