import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


const initialState = {
    name: '',
    phone: '',
    gender: '',
};

const Auth = ({ 
    history 
}) => {
    const [formData, setFormData] = useState(initialState);

    const [packageDeliv, setPackageDeliv] = useState(false);
    const [pickupDeliv, setPickupDeliv] = useState(false);
    const [shopping, setShopping] = useState(false);
    const [sorting, setSorting] = useState(false);

    const [roles, setRoles] = useState([]);

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
        phone,
        gender,
     } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});



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
                    <form>
                        <h4>* Indicates required fields</h4>
                        <fieldset>
                            <div className="row" label="*">
                                <input 
                                    type="text" 
                                    name="phone" 
                                    placeholder="Enter Phone Number" 
                                    value={phone}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                            <div className="row" label="*">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Enter Full Name" 
                                    value={name}
                                    onChange={e => onChange(e)}
                                />
                            </div>
                            <div className="row select" label="*">
                                <select 
                                    name="gender"
                                    value={gender}
                                    onChange={e => onChange(e)}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="row" label="*">
                                <div className="pilot-options">
                                    <label onClick={() => handleJobType('delivery')} className="pilot-option">
                                        {packageDeliv ? (
                                            <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'15px', width:'15px', border:'2px solid #ff4b2b', padding:'2px', borderRadius:'50%', marginRight:'10px'}}>
                                                <div style={{height:'100%', width:'100%', background:'#ff4b2b', borderRadius:'50%'}}></div>
                                            </div>
                                        ) : (
                                            <div style={{height:'14px', width:'14px', border:'2px solid #cecece', borderRadius:'50%', marginRight:'10px'}}></div>
                                        )}
                                        <span>Package Delivery Driver</span>
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
                            </div>
                        </fieldset>
                    </form>
                    <div className="button-container full">
                        <a href="/" className="button" target="_blank">
                            Check-In
                        </a>
                    </div>
                    <div className="disclaimer">
                        <p>
                            We use Stripe to make sure you get paid on time and to keep your personal bank and details secure. Click 
                            {' '}<strong>Save and continue</strong>  to set up your payments on Stripe.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

Auth.propTypes = {

}

const mapStateToProps = state => ({

});

export default Auth;
