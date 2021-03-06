import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        link: (<span className='session-link'>New to KidPlex?
                    <Link to='/signup'> Sign up now.</Link>
                </span>)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;