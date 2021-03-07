import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { addBoard } from '../actions/boardActions';

import AuthModal from '../components/modals/AuthModal';
import YoutubeBlock from '../components/common/YoutubeBlock';

import qrPNG from '../utils/imgs/frame.png';
import frownPNG from '../utils/imgs/frown.png';


const initialState = {
    name: 'My QR Code'
};

const Landing = ({
    history,
    auth: { 
        user, 
        isAuthenticated, 
        loading
    }, 
    profile,
    addBoard
}) => {
    const [formData, setFormData] = useState(initialState);

    const { name } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const createQR = async (e) => {
        e.preventDefault();
    
        let data = new FormData();
        // if(formData.file !== '') data.append('file', formData.file);
        if(name !== '')data.append('name', name);

        console.log('ON ADD BOARD')
    
        addBoard({name, history});
    
        // mixpanel.track("Add Collection Completed", {
        //   "Collection Name": name,
        //   "Collection Category": categoryData,
        //   "Collection Cost": price,
        //   "Store Name": store.store.name,
        //   "Creation Date": new Date().toISOString(), 
        // });
    
    };

    return (
        <Fragment>
            <div className="page-left">
                {/* <div className="group">
                    <div className="text">
                        <h2 className="slogan">
                        📱 QR Code Attendee List for FREE
                        </h2>
                        <p className="intro">
				            🤳 Host a class or event and let your vistors scan a QR code to sign-in
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
                            (founder of <a target="_blank" href="/">Nomad List</a>)
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
                </div> */}
                <div className="group settings">
                    <div className="heading">
                        Customize Settings
                    </div>
                    <p>
                        You can change these settings at any time later in your account after you have created your list.
                    </p>

                    <div>
                        Name QR Code:{' '}
                        <input 
                            type="text" 
                            className="email" 
                            name="name" 
                            value={name} 
                            onChange={e => onChange(e)}
                            style={{display:'inline-block', width:'200px'}} 
                        />
                    </div> 
                    
                </div>
                {/* <div className="group design">
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
                </div> */}
                
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

                    {/* <div className="list">              
                        <div className="row">
                            <div className="cell name">Sarah H.</div>
                            <div className="cell date">a few seconds ago</div>
                            <div className="cell price">
                                <span className="user_list_status">
                                    Remove
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell name">Bobby B.</div>
                            <div className="cell date">an hour ago</div>
                            <div className="cell price">
                                <span className="user_list_status">
                                    Remove
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell name">John D.</div>
                            <div className="cell date">an hour ago</div>
                            <div className="cell price">
                                <span className="user_list_status">
                                    Remove
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell name">Sarah H.</div>
                            <div className="cell date">a few seconds ago</div>
                            <div className="cell price">
                                <span className="user_list_status">
                                    Remove
                                </span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="cell name">Bobby B.</div>
                            <div className="cell date">an hour ago</div>
                            <div className="cell price">
                                <span className="user_list_status">
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div> */}

                    <div className="no-rides">
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
                <div onClick={createQR} className="button">
                    Create QR Code
                </div>
            </div>

            {!loading && !isAuthenticated ? <AuthModal /> : null }
        </Fragment>
    )
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    addBoard: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { addBoard })(withRouter(Landing));
