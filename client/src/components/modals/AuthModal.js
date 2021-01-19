import React, { useState, useEffect, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { register, login } from '../../actions/authActions';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';


const initialState = {
    name: '',
    email: '',
    password: '',
    signup: true
};

const AuthModal = ({ setAlert, register, login, auth: { isAuthenticated, user }, history }) => {

    const [displayModal, toggleModal] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [formSignUp, setFormSignUp] = useState(true);

    useEffect(() => {
        if(!user) {
            setFormData(initialState)
        } else {
            if(!user.signup) {
                setFormSignUp(false)
            }
        };
        if(!isAuthenticated) {
            setTimeout(() => toggleModal(!displayModal),5000)
        }
    }, []);



    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
        console.log(formData);

        console.log(formData);
    };

    const { name, email, password } = formData;

    const onSubmit = async e => {
        e.preventDefault();

        const first_name = name.split(' ').slice(0, -1).join(' ');
        const last_name = name.split(' ').slice(-1).join(' ');

        console.log('FIRST NAME');
        console.log(first_name)
        console.log('LAST NAME');
        console.log(last_name);

        if(formSignUp) {
            // const fullName = `${formData.firstname} ${formData.lastname}`
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

        setFormData(initialState);
    }

    const bg2 = {
        modal: {
            boxShadow: "none",
            borderRadius: "15px",
            border: "1px solid rgb(214, 214, 214)",
            padding: "0"
        },
        overlay: {
          background: "rgba(20,20,20, .5)"
        }
    };

    return (
        <React.Fragment>
            <ModalContainer>
                <div id="modal" className="col-10 mx-auto col-md-8 col-lg-6 text-center text-capitalize py-5">
                    <div className="form-container sign-up-container" id="sign-up-container">
                        <form style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom: '2rem'}} id="auth-form" onSubmit={onSubmit}>
                            {formSignUp ? (
                                <Fragment>
                                    <h3>Create Account</h3>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input_line"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={e => onChange(e)}
                                        style={{margin:'10px 0', width:'100%', height:'50px'}}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <h3>Log In</h3>
                                    <p style={{color: '#808080', marginTop:'10px'}}>Fast, Free unlimited shopping from the fastest place to shop online.</p>
                                </Fragment>
                            )}
                            <input
                            type="email"
                            name="email"
                            className="input_line"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={e => onChange(e)}
                            style={{margin:'10px 0', width:'100%', height:'50px'}}
                            />
                            <input
                                type="password"
                                name="password"
                                className="input_line"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={e => onChange(e)}
                                style={{margin:'10px 0', width:'100%', height:'50px'}}
                            />
                            {/* <input
                                type="password"
                                name="password2"
                                className="input_line"
                                placeholder="Confirm Password"
                                value={password2}
                                onChange={e => onChange(e)}
                                style={{margin:'10px 0', width:'100%', height:'50px'}}
                            /> */}
                            {formSignUp ? (
                                <Fragment>
                                    <button style={{width: '100%'}} type="submit">Create An Account</button>
                                    <div className="btn-secondary" onClick={() => setFormSignUp(false)} style={{width: '100%'}}>Already have an account? <span>Log In</span></div>
                                </Fragment>
                            ): (
                                <Fragment>
                                    <button style={{width: '100%'}} type="submit">Start Shopping!</button>
                                    <div className="btn-secondary" onClick={() => setFormSignUp(true)} style={{width: '100%'}}>Don't have an account? <span>Get Started</span></div>
                                </Fragment>
                            )}
                            
                            {/* <Link to="/login" style={{color:'#808080', marginTop:'1rem'}}>Already have an account?</Link> */}
                        </form>
                    </div>
                </div>
            </ModalContainer>
        </React.Fragment>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 300;
    #modal {
        background: #fff;
        @media (max-width: 768px){
            margin-top: -7rem;
        }
    }
`;

AuthModal.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setAlert, register, login })(withRouter(AuthModal));
