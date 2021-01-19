import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBoardById } from '../actions/boardActions';

import { addScan } from '../actions/boardActions';
import { login, register } from '../actions/authActions';


const initialState = {
    name: '',
    email: '',
    password: '',
};

const Auth = ({ 
    history,
    match,
    addScan,
    login,
    register,
    getBoardById,
    auth,
    board: {
        board,
        loading
    },
}) => {
    const [formSignUp, setFormSignUp] = useState(true);

    const [formData, setFormData] = useState(initialState);

    // Has user been added to attendee list
    const [sentScan, setSentScan] = useState(false);

    const [packageDeliv, setPackageDeliv] = useState(false);
    const [pickupDeliv, setPickupDeliv] = useState(false);
    const [shopping, setShopping] = useState(false);
    const [sorting, setSorting] = useState(false);

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        getBoardById(match.params.id);
    }, []);

    const onAddRole = (value) => {
        setRoles([...roles, value]);
        // filterItems(value);
    }

    const onDeleteRole = (value) => {
        let remainingTags = roles.filter ((r) => {
        return (r !== value);
        });
        setRoles([...remainingTags]);
        // unFilterItems(value);
    }

    const handleJobType = (value) => {
        console.log('ROLES:')
        console.log(value);
        console.log(roles);
        if(value === 'delivery' && !packageDeliv) {
            setPackageDeliv(true);

            onAddRole(value);
        } else if (value === 'pickup' && !pickupDeliv) {
            setPickupDeliv(true);

            onAddRole(value);
        } else if (value === 'shopping' && !shopping) {
            setShopping(true);

            onAddRole(value);
        } else if (value === 'sorting' && !sorting) {
            setSorting(true);

            onAddRole(value);
        } else {
            onDeleteRole(value);

            if(value === 'delivery') {
                setPackageDeliv(false);
            } else if (value === 'pickup') {
                setPickupDeliv(false);
            } else if (value === 'shopping') {
                setShopping(false);
            } else if (value === 'sorting') {
                setSorting(false);
            }
        }
    }

    const { 
        name,
        email,
        password,
     } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});


    const onSubmit = async e => {
        e.preventDefault();

        if(auth.user === null) {
            if(formSignUp) {
                const first_name = name.split(' ').slice(0, -1).join(' ');
                const last_name = name.split(' ').slice(-1).join(' ');
    
                console.log('FIRST NAME');
                console.log(first_name)
                console.log('LAST NAME');
                console.log(last_name);
    
                register({ 
                    first_name, 
                    last_name, 
                    email, 
                    password, 
                    history 
                });
            } else {
                login(email, password);
            }
        }

        setFormData(initialState);
    }

    if(!sentScan && auth.user && board) {
        addScan(match.params.id, history)
        setSentScan(true);
    }

    // if(isAuthenticated && !profile.loading && profile.profile) {
    //     if(!profile.profile.registration_complete) {
    //         history.push(`/account-setup`);
    //     } else {
    //         history.goBack();
    //     }  
    // }

    return (
        <main id="home">
            <div className="attendee-setup-container">
                <h2 className="slogan" style={{margin:'auto'}}>
                    My QR Code
                </h2>
                <section className="attendee-form">
                    <div style={{width:'100%'}} className="profile-settings-transition">
                        <div id="transition-1" style={{width:'100%'}} className={formSignUp ? "profile-settings-container active" : "profile-settings-container"}>
                            <form>
                                <h4>Create an account to Check-In</h4>
                                <fieldset>
                                    <div className="row" label="Full Name">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Enter Full Name" 
                                            value={name}
                                            onChange={e => onChange(e)}
                                        />
                                    </div>
                                    <div className="row" label="Email">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Enter Email" 
                                            value={email}
                                            onChange={e => onChange(e)}
                                        />
                                    </div>
                                    <div className="row" label="Password">
                                        <input 
                                            type="password" 
                                            name="password" 
                                            placeholder="Enter Password" 
                                            value={password}
                                            onChange={e => onChange(e)}
                                        />
                                    </div>
                                    {/* <div className="row select" label="Gender">
                                        <select 
                                            name="gender"
                                            value={gender}
                                            onChange={e => onChange(e)}
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div> */}
                                </fieldset>
                            </form>  
                        </div>
                        <div id="transition-2" style={{width:'100%', justifyContent:'center'}} className={!formSignUp ? "profile-settings-container active" : "profile-settings-container"}>
                            <form>
                                <h4>Check-In</h4>
                                <fieldset>
                                    {/* <div className="row" label="Full Name">
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            placeholder="Enter Phone Number" 
                                            value={phone}
                                            onChange={e => onChange(e)}
                                        />
                                    </div> */}
                                    <div className="row" label="Email">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Enter Email" 
                                            value={email}
                                            onChange={e => onChange(e)}
                                        />
                                    </div>
                                    <div className="row" label="Password">
                                        <input 
                                            type="password" 
                                            name="password" 
                                            placeholder="Enter Password" 
                                            value={password}
                                            onChange={e => onChange(e)}
                                        />
                                    </div>
                                    {/* <div className="row">
                                        <div className="pilot-options">
                                            <label onClick={() => handleJobType('delivery')} className="pilot-option">
                                                {packageDeliv ? (
                                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'15px', width:'15px', border:'2px solid #ff4b2b', padding:'2px', borderRadius:'50%', marginRight:'10px'}}>
                                                        <div style={{height:'100%', width:'100%', background:'#ff4b2b', borderRadius:'50%'}}></div>
                                                    </div>
                                                ) : (
                                                    <div style={{height:'14px', width:'14px', border:'2px solid #cecece', borderRadius:'50%', marginRight:'10px'}}></div>
                                                )}
                                                style={{color:'#208cec'}}>Package Delivery Driver</span>
                                            </label>
                                            <label onClick={() => handleJobType('pickup')} className="pilot-option">
                                                {pickupDeliv ? (
                                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'15px', width:'15px', border:'2px solid #ff4b2b', padding:'2px', borderRadius:'50%', marginRight:'10px'}}>
                                                        <div style={{height:'100%', width:'100%', background:'#ff4b2b', borderRadius:'50%'}}></div>
                                                    </div>
                                                ) : (
                                                    <div style={{height:'14px', width:'14px', border:'2px solid #cecece', borderRadius:'50%', marginRight:'10px'}}></div>
                                                )}
                                                <span>Pick-up Delivery Driver</span>
                                            </label>
                                            <label onClick={() => handleJobType('shopping')} className="pilot-option">
                                                {shopping ? (
                                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'15px', width:'15px', border:'2px solid #ff4b2b', padding:'2px', borderRadius:'50%', marginRight:'10px'}}>
                                                        <div style={{height:'100%', width:'100%', background:'#ff4b2b', borderRadius:'50%'}}></div>
                                                    </div>
                                                ) : (
                                                    <div style={{height:'14px', width:'14px', border:'2px solid #cecece', borderRadius:'50%', marginRight:'10px'}}></div>
                                                )}
                                                <span>In-store Shopper</span>
                                            </label>
                                            <label onClick={() => handleJobType('sorting')} className="pilot-option">
                                                {sorting ? (
                                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'15px', width:'15px', border:'2px solid #ff4b2b', padding:'2px', borderRadius:'50%', marginRight:'10px'}}>
                                                        <div style={{height:'100%', width:'100%', background:'#ff4b2b', borderRadius:'50%'}}></div>
                                                    </div>
                                                ) : (
                                                    <div style={{height:'14px', width:'14px', border:'2px solid #cecece', borderRadius:'50%', marginRight:'10px'}}></div>
                                                )}
                                                <span>Sorting & Packaging</span>
                                            </label>
                                        </div>
                                    </div> */}
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div style={{width:'80%'}} className="button-container full">
                        <div onClick={onSubmit} className="button">
                            Check-In
                        </div>
                    </div>
                    {formSignUp ? <div className="link-text" onClick={() => setFormSignUp(false)} style={{width: '100%', marginTop:'10px', cursor:'pointer', textAlign:'center'}}>Already have an account? <span style={{color:'#208cec'}}>Log In</span></div>
                    : <div className="btn-secondary" onClick={() => setFormSignUp(true)} style={{width: '100%', marginTop:'10px', cursor:'pointer', textAlign:'center'}}>Don't have an account? <span style={{color:'#208cec'}}>Register</span></div>}
                    {/* <div className="disclaimer">
                        <p>
                            We use Stripe to make sure you get paid on time and to keep your personal bank and details secure. Click 
                            {' '}<strong>Save and continue</strong>  to set up your payments on Stripe.
                        </p>
                    </div> */}
                </section>
            </div>
        </main>
    )
}

Auth.propTypes = {
    addScan: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    getBoardById: PropTypes.func.isRequired,
};
  
const mapStateToProps = (state) => ({
    auth: state.auth,
    board: state.board
});
  
export default connect(mapStateToProps, { addScan, register, login, getBoardById})(withRouter(Auth));
