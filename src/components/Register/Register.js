import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    registerChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    registerClick = () => {
        this.props.registerUser(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="box" id="register">
                    <form>
                        <p className="input-container">
                            <label className="text-field-input" id="first-name-label" htmlFor="first_name">First Name</label>
                            <input className="text-field" type="text" name="first_name" id="first_name" onChange={this.registerChange} />
                        </p>
                        <p className="input-container">
                            <label className="text-field-input" htmlFor="last_name">Last Name</label>
                            <input className="text-field" type="text" name="last_name" id="last_name" onChange={this.registerChange} />
                        </p>
                        <p className="input-container">
                            <label className="text-field-input" htmlFor="email">E-mail</label>
                            <input className="text-field" type="email" name="email" id="email" onChange={this.registerChange} />
                        </p>
                        <p className="input-container">
                            <label className="text-field-input" htmlFor="date_of_birth">Date of Birth</label>
                            <input className="text-field" type="date" name="date_of_birth" id="date_of_birth" onChange={this.registerChange} />
                        </p>
                        <p className="input-container">
                            <label className="text-field-input" htmlFor="telephone">Telephone</label>
                            <input className="text-field" type="text" name="telephone" id="telephone" onChange={this.registerChange} />
                        </p>
                        <p className="input-container">
                            <label className="text-field-input" htmlFor="country">Country</label>
                            <input className="text-field" type="text" name="country" id="country" onChange={this.registerChange} />
                        </p>
                        <p className="input-container">
                            <label className="text-field-input" htmlFor="password">Password</label>
                            <input className="text-field" type="password" name="password" id="password" onChange={this.registerChange} />
                        </p>
                        <button className="primary-btn" type="submit" onClick={this.registerClick}>Register</button>
                    </form>
                </div>

                <div className="textDiv">
                    <p>Or if you already have an account, <Link className="additional-info" to="/">Sign in</Link></p>
                </div>
            </React.Fragment>
        )
    }
}


export default Register;