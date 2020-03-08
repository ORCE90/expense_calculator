import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''

        }

    }


    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(this.state)
    }

    loginClick = () => {
        this.props.loginUser(this.state);
    }


    render() {
        return (
            <React.Fragment>
                <main>
                    <div>
                        <div class="box" id="login">
                            <form>
                                <p class="input-container">
                                    <label class="text-field-input" for="email">E-mail</label>
                                    <input class="text-field" onChange={this.saveInputValue} type="email" name="email" id="email" />
                                </p>
                                <p class="input-container">
                                    <label class="text-field-input" for="password">Password</label>
                                    <input class="text-field" onChange={this.saveInputValue} type="password" name="password" id="password" />
                                </p>
                                <button class="primary-btn" type="submit" onClick={this.loginClick}>Sign in</button>
                            </form>
                        </div>


                        <div class="textDiv">
                            <p>Or if you don't have an account, <Link className="additional-info" to="/register">Register</Link></p>
                        </div>
                    </div>

                </main>
            </React.Fragment>
        )
    }
}


export default Login;