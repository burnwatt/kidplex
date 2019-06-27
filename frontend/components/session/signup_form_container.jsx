import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        link: (<span>Already a KidPlex Subscriber?
                <Link className='session-link' to='/login'> Login instead.</Link>
               </span>)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
};

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;