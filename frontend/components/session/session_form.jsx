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
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({},this.state);
        this.props.processForm(user)
            .then(user => this.props.history.push("/browse"))
    }

    demoLogin(e){
        let user = { email: 'woody@andysroom.com', password: '4SnakeInMyBoots!'};
        this.props.processForm(user)
            .then(user => this.props.history.push("/browse"))
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value })
    }

    renderErrors(){
        let errors = Array.from(this.props.errors);
        if (errors) {
            return (
                <ul>
                    {errors.map((error, i) => {
                        return <li className="errors-list" key={`error-${i}`}>
                            {error}
                        </li>
                    })}
                </ul>
            );
        }
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render(){
        let header = this.props.formType === 'login' ? "Sign In" : "Sign Up";
        let link = this.props.link;
        let demo;

        if (this.props.formType === 'login'){
            demo = <button className='demo' onClick={this.demoLogin}>Demo Login</button>
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
        
                    </form>
                    <br />
                    {demo}
                    <br />
                    {link}
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);