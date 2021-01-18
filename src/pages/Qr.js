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
                    Success! Your QR Code was created...
                </h2>

                <div className="qr-img-container">
                    <img className="qr-img" src={qrPNG} />
                </div>

                <p>
		            Scan this QR code with your phone's camera app to see your QR code in action (or click it):
                </p>


                <div className="group design">
                    <div className="heading">
                        SAVE AND EDIT FOR LATER
                    </div>
                    <p>You can edit this QR Code attendee list at any time later with the URL in the address bar of this page. You can bookmark this page or copy the URL below to edit this QR Code later:</p>

                    <input type="text" value="https://qrmenucreator.com/____SAVE_THIS_URL_TO_EDIT_YOUR_MENU_LATER____&action=edit&menu_id=akzsqz&menu_hash=hyswmhlby0lodavg" style={{width:'calc(100% - 14px)'}} />

                    <p>We can also send this URL to your email so you don't lose it:</p>

                    <div className="input-container">
                        Your email:{' '}
                        <input type="text" className="email" value="example@example.com" style={{display:'inline-block', marginLeft:'10px', width:'200px'}} />
                        <div className="button">
                            Send me an edit link
                        </div>
                    </div> 
                </div>
                
                {/* <div style={{display:'flex', justifyContent:'center'}}>
                    <YoutubeBlock videoId='_nBlN9yp9R8' />
                </div> */}

                <a href="/" className="qr_code_link action-save-changes" target="_blank">
                    {/* <div className="qr_code">
                        <img className="qr_code_logo" src="https://qrmenucreator.com/assets/11.png?2" />
                        <canvas width="1000" height="1000" style={{display:'none'}} />
                        <img style={{display: 'block'}} src="https://lh3.googleusercontent.com/proxy/WfUMWqfw-3Mb2w9wPBhvFme--pGZJsjKPRsLxtSyMnqdckRlaNqAVZauN5att8-i9fsSYbonKzltSadFBO-EwPS9ZDREQTQ5wmj-xZqLg-ka0PcQun6xU_4e" />
                    </div> */}
                </a>
                <div className="button-container full medium">
                    <a href="/dashboard" className="button" target="_blank">
                        View Dashboard
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

Success.propTypes = {

}

export default Success
