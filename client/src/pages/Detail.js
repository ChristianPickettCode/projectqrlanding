import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment'

import { getBoardById } from '../actions/boardActions';

import YoutubeBlock from '../components/common/YoutubeBlock';
import AuthModal from '../components/modals/AuthModal';

import qrPNG from '../utils/imgs/frame.png';
import frownPNG from '../utils/imgs/frown.png';

const Detail = ({
    getBoardById,
    auth,
    board: {
        board,
        loading
    },
    match
}) => {
    // Nav underline Table
    const [tableShow1, setTableShow1] = useState('details');

    const [renderList, setRenderList] = useState(false);

    const [attendeeList, setAttendeeList] = useState([]);

    useEffect(() => {
        getBoardById(match.params.id);
    }, []);

    // const renderAttendeeList = () => {
    //     setAttendeeList([]);
    //     try {
    //         if(board.scan_list.length > 0) {
    //             board.scan_list.map(attendee => {
    //                 const letter = attendee.user.first_name.charAt(0);

    //                 setAttendeeList(attendeeList => [...attendeeList, (
    //                     <div className="row">
    //                         <div className="cell name">{attendee.user.first_name} {letter}.</div>
    //                         <div className="cell date">{moment(attendee.date).calendar()}</div>
    //                         <div className="cell price">
    //                             <span className="user_list_status">
    //                                 Remove
    //                             </span>
    //                         </div>
    //                     </div>
    //                 )])       
    //             });
    //         } else {
    //             setAttendeeList([(
    //                 <div className="no-rides">
    //                     {/* <div className="rocket">
    //                         <img src={frownPNG} />
    //                     </div> */}
    //                     <h1>Scan your QR Code to view <br/> attendee list . . .</h1>
    //                     <h2>No attendees to display yet.</h2>
    //                 </div>
    //             )])
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    let scanList 
    
    if(!renderList && !loading && board !== null) {
        scanList= board.scan_list.map(attendee => {
            let letter = null; 
            let firstName;

            if(attendee.user.last_name){
                letter = attendee.user.last_name.charAt(0) + ".";
            }

            if(attendee.user.first_name) {
                firstName = attendee.user.first_name;
            } else {
                firstName = attendee.user.email
            }
            
            return (
                <div className="row">
                    <div className="cell name">{firstName} {letter}</div>
                    <div className="cell date">{moment(attendee.date).calendar()}</div>
                    <div className="cell price">
                        <span className="user_list_status">
                            Remove
                        </span>
                    </div>
                </div>
            )
        })
    }

    // if(!renderList && !loading && board) {
    //     renderAttendeeList()
    //     setRenderList(true);
    // }

    return (
        <Fragment>
            <div className="page-left detail">
                <ul class="nav-underline store side profile">
                    <div onClick={e => setTableShow1('details')} className={tableShow1 === "details" && "active"}><li><i class="fas fa-list"></i><p>Details</p></li></div>
                    <div onClick={e => setTableShow1('settings')} className={tableShow1 === "settings" && "active"}><li><i class="fas fa-cog"></i><p>Settings</p></li></div>
                </ul>
                <div className="profile-settings-transition">
                    <div className={tableShow1 === 'details' ? "profile-settings-container active" : "profile-settings-container"} id="transition-3">
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

                            {/* <div className="no-rides">
                                <h1>No attendees to display yet</h1>
                                <h2>Scan your QR Code to view attendee list.</h2>
                            </div> */}

                            {board !== null && board.scan_list.length > 0 ? (
                                <div className="list">
                                    {scanList}
                                </div>
                            ) : (
                                <div className="no-rides">
                                    {/* <div className="rocket">
                                        <img src={frownPNG} />
                                    </div> */}
                                    <h1>Scan your QR Code to view <br/> attendee list . . .</h1>
                                    <h2>No attendees to display yet.</h2>
                                </div>
                            )}
                        
                        </div>
                    </div>
                    <div className={tableShow1 === 'settings' ? "profile-settings-container active" : "profile-settings-container"} id="transition-4">
                    <div className="group settings">
                            <div className="heading">
                                Customize Settings
                            </div>
                            <p>
                                You can change these settings at any time later in account admin page after you have created your QR code.
                            </p>

                            <div className="input-container">
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
                    </div>
                </div>

            </div>
            <div className="page-right">
                <div className="qr-img-container">
                    <img className="qr-img" src={board && board.url} />
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
                <a href={board && board.url} download className="button">
                    Print QR Code
                </a>
            </div>

            {!auth.loading && !auth.isAuthenticated ? <AuthModal /> : null }
        </Fragment>
    )
}


Detail.propTypes = {
    board: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getBoardById: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    board: state.board,
    auth: state.auth
});

export default connect(mapStateToProps, { getBoardById })(Detail);
