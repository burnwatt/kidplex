import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import HeadContainer from '../head/head_container';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({},this.state);
        this.props.processForm(user)
            .then(user => this.props.history.push('/'))
    }

    demoLogin(e){
        let user = { email: 'woody@andysroom.com', password: '4SnakeInMyBoots!'};
        this.props.processForm(user)
            .then(user => this.props.history.push('/'))
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value })
    }

    renderErrors(){
        let errors = this.props.errors;
        if (errors.session) {
            return (
                <ul>
                    {errors.session.map((error, i) => {
                        return <li key={`error-${i}`}>
                            {error}
                        </li>
                    })}
                </ul>
            );
        }
    }

    render(){
        let header = this.props.formType === 'login' ? "Sign In" : "Sign Up";
        let link = this.props.link;
        let demo;

        if (this.props.formType === 'login'){
            demo = <button className='session-btn' onClick={this.demoLogin}>Demo Login</button>
        }
        
        return (
            <div className='session-wrapper'>
                <HeadContainer />
                <div className='modal'>
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        <h1>{header}</h1>
                        
                        {this.renderErrors()}

                        <div className='session-input'>
                            <label>Email
                                <input type="text" value={this.state.email} onChange={this.update('email')} />
                            </label>
                        </div>
                        <br />
                        <div className='session-input'>
                            <label>Password
                                <br />
                                <input type="password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                        </div>

                        <br />

                        <button className='session-btn' onClick={this.handleSubmit}>{header}</button>
                        {demo}
                        {link}
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);