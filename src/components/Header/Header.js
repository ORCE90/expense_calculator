import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="nav">
                        <div className="buttons">
                            <Link to="/products">
                                <button className="main-buttons" id="products-btn">Products</button>
                            </Link>
                            <Link to="/expenses">
                                <button className="main-buttons" id="expenses-btn">Expenses</button>
                            </Link>
                        </div>
                        <div className="right-side">
                            <span><i className="fas fa-user-alt"></i></span><p>Orce Apostolovski</p>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;