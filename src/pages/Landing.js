import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import YoutubeBlock from '../components/common/YoutubeBlock';

import qrPNG from '../utils/imgs/frame.png';
import frownPNG from '../utils/imgs/frown.png';

const Landing = props => {
    return (
        <Fragment>
            <div className="page-left">
                <div className="group">
                    <div className="text">
                        <h2 className="slogan">
				            🔖 Make a QR Code Menu for FREE
                        </h2>
                        <p className="intro">
				            🤳 Let your customers scan a QR code and {' '}
                            <a target="_blank" href="/">see your menu</a>
                            {' '}with their phone
                        </p>
                        <p className="intro">
				            ✨ Update your menu whenever you want without having to print them again
                        </p>
                        <p className="intro">
				            🦠 Reduce the spread of the Coronavirus by removing physical menus
                        </p>
                        <p className="intro"> 
				            🍝 <a href="/">Hundreds of restaurants, cafes and bars</a>
                            {' '}already use QR Menu Creator
                        </p>
                        <p className="intro">
				            📈 See live analytics for your menu like how many times it's scanned when (
                            <a href="/">see demo</a>)
                        </p>
                        <p className="intro">
				            💸 It's completely free, made by{' '}
                            <a target="_blank" href="/">@essoterik</a>
                            {/* (founder of <a target="_blank" href="/">Nomad List</a>) */}
                        </p>
                        <p className="intro">
				            📱 Scan the QR code on the 👉 right (or below) with your phone's camera app to live preview your edits
                        </p>
                        <p className="intro">
				            ✍️ You can start by editing the example menu below. You can use 
                            {' '}<a target="_blank" href="/">Markdown styling</a>
                            {' '}or the styling bar above the text box; your edits are auto-saved and go live immediately
                        </p>
                    </div>
                </div>
                <div className="group settings">
                    <div className="heading">
                        Customize Settings
                    </div>
                    <p>
                        You can change these settings at any time later in account admin page after you have created your QR code.
                    </p>

                    <div>
                        💌 QR Code Name:{' '}
                        <input type="text" className="email" value="My QR Code" style={{display:'inline-block', width:'200px'}} />
                    </div> 
                    
                </div>
                <div className="group design">
                    <div className="heading">
                        Design your menu
                    </div>
                    <div className="left">
                        🅰 Heading font:{' '}
                        <select className="heading_font">
                            <option selected>Open Sans</option>
                            <option>Indie Flower</option>
                            <option>Parisienne</option>
                            <option>Press Start 2P</option>
                            <option>Flavors</option>
                            <option>Fredericka the Great</option>
                            <option>Oleo Script Swash Caps</option>
                            <option>Nosifer</option>
                            <option>Eater</option>
                            <option>Abril Fatface</option>
                            <option>Anton</option>
                            <option>Arvo</option>
                            <option>Cabin</option>
                            <option>Cormorant</option>
                            <option>Dokdo</option>
                            <option>Dosis</option>
                            <option>Lato</option>
                            <option>Lobster</option>
                            <option>Monda</option>
                            <option>Montserrat</option>
                            <option>Nunito</option>
                            <option>Noto Sans</option>
                            <option>Old Standard TT</option>
                            <option>Open Sans</option>
                            <option>Oswald</option>
                            <option>Pacifico</option>
                            <option>Poiret One</option>
                            <option>Poppins</option>
                            <option>Prata</option>
                            <option>PT Serif</option>
                            <option>Raleway</option>
                            <option>Righteous</option>
                            <option>Roboto Slab</option>
                            <option>Source Sans Pro</option>
                            <option>Ubuntu</option>
                            <option>Yatra One</option>
                            <option>Pontano Sans</option>
                        </select>

                        <br />
                        
			            🅰 Heading color:{' '}
                        <input type="color" className="heading_color" value="#000000" />

                        <br />

			            🌈 Background color:{' '}
                        <input type="color" className="background_color" value="#f9f9f9" />

                        <br />

			            🅾 Text alignment:{' '}
                        <select className="alignment">
                            <option value="left" selected>Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>

                        <br />
                    </div>
                    <div className="right">
                        🅿 Text font:{' '}
                        <select className="text_font">
                            <option selected>Open Sans</option>
                            <option>Indie Flower</option>
                            <option>Parisienne</option>
                            <option>Press Start 2P</option>
                            <option>Flavors</option>
                            <option>Fredericka the Great</option>
                            <option>Oleo Script Swash Caps</option>
                            <option>Nosifer</option>
                            <option>Eater</option>
                            <option>Abril Fatface</option>
                            <option>Anton</option>
                            <option>Arvo</option>
                            <option>Cabin</option>
                            <option>Cormorant</option>
                            <option>Dokdo</option>
                            <option>Dosis</option>
                            <option>Lato</option>
                            <option>Lobster</option>
                            <option>Monda</option>
                            <option>Montserrat</option>
                            <option>Nunito</option>
                            <option>Noto Sans</option>
                            <option>Old Standard TT</option>
                            <option>Open Sans</option>
                            <option>Oswald</option>
                            <option>Pacifico</option>
                            <option>Poiret One</option>
                            <option>Poppins</option>
                            <option>Prata</option>
                            <option>PT Serif</option>
                            <option>Raleway</option>
                            <option>Righteous</option>
                            <option>Roboto Slab</option>
                            <option>Source Sans Pro</option>
                            <option>Ubuntu</option>
                            <option>Yatra One</option>
                            <option>Pontano Sans</option>
                        </select>

                        <br />
                        
			            🅰 Text color:{' '}
                        <input type="color" className="text_color" value="#808080" />

                        <br />

			            🌓 Tone:{' '}
                        <select className="tone">
                            <option value="light" selected>Light</option>
                            <option value="dark">Dark</option>
                        </select>

                        <br />

			            🖼 Background image:{' '}
                        <input type="file" accept=".jpg,.jpeg,.png" className="background_image" />

                        <br />

                        🅰 QR color:{' '}
                        <input type="color" className="qr_color" value="#000000" />

                        <br />
                    </div>
                </div>
                
                <div className="group chart">
                    {/* <button className="qr-campaign-charts__date">
                        <span className="icon-qr-calendar">
                            <i class="fas fa-calendar-alt"></i>
                        </span>
                        Dec 18, 2020 - Jan 17, 2021
                        <span className="icon-qr-drop" style={{marginTop:'10px'}}>
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </button>
                    <button className="qr-campaign-charts__groupBy">
                        Month
                        <span className="icon-qr-drop" style={{marginTop:'10px'}}>
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </button> */}
                    <button className="qr-campaign-charts__download">
                        <span className="icon-qr-calendar">
                            <i class="fas fa-cog"></i>
                        </span>
                        Options
                        <span className="icon-qr-drop" style={{marginTop:'10px'}}>
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </button>

                    <div className="no-rides">
                        {/* <div className="rocket">
                            <img src={frownPNG} />
                        </div> */}
                        <h1>Scan your QR Code to view <br/> attendee list . . .</h1>
                        <h2>No attendees to display yet.</h2>
                    </div>
                    
                </div>

            </div>
            <div className="page-right">
                <div className="qr-img-container">
                    <img className="qr-img" src={qrPNG} />
                </div>
                
                {/* <div style={{display:'flex', justifyContent:'center'}}>
                    <YoutubeBlock videoId='_nBlN9yp9R8' />
                </div> */}

                <div className="divider"></div>
                <p>
		            Scan this QR code with your phone's camera app to see your QR code in action (or click it):
                </p>
                <a href="/" className="qr_code_link action-save-changes" target="_blank">
                    {/* <div className="qr_code">
                        <img className="qr_code_logo" src="https://qrmenucreator.com/assets/11.png?2" />
                        <canvas width="1000" height="1000" style={{display:'none'}} />
                        <img style={{display: 'block'}} src="https://lh3.googleusercontent.com/proxy/WfUMWqfw-3Mb2w9wPBhvFme--pGZJsjKPRsLxtSyMnqdckRlaNqAVZauN5att8-i9fsSYbonKzltSadFBO-EwPS9ZDREQTQ5wmj-xZqLg-ka0PcQun6xU_4e" />
                    </div> */}
                </a>
            </div>
            <div className="button-container">
                <a href="/" className="button" target="_blank">
                    Create QR Code
                </a>
            </div>
        </Fragment>
    )
}

Landing.propTypes = {

}

export default Landing
