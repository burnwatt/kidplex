import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({},this.state);
        this.props.processForm(user)
            .then(user => this.props.history.push('/'))
    }

    update(field){
        return (e) => this.setState({[field]: e.target.value })
    }

    renderErrors(){
        let errors = this.props.errors;
        if (errors && errors.constructor === Array) {
            return (
                <ul>
                    {errors.map((error, i) => {
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

        return (
            <div className='session-form'>
                <h1>{header}</h1>
                {this.renderErrors()}
                <form>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>{header}</button>
                </form>
                {link}
            </div>
        )
    }
}

export default withRouter(SessionForm);