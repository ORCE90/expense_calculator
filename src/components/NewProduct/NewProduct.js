import React from 'react';
import { Link } from 'react-router-dom'
import './NewProduct.css';


class NewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            productDescription: '',
            productType: '',
            productDate: '',
            productPrice: '',
        }
    }

    saveInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <this.props.header />
                <h3 id="new-products-h3">New Product</h3>
                <main id="main-box">
                    <div className="box-container" id="input-fields">
                        <div className="form-box">
                            <form>
                                <p className="input-container">
                                    <label className="text-field-input" htmlFor="product-name">Product Name</label>
                                    <input className="text-field" type="text" name="product-name" onChange={this.saveInputValue} id="productName" />
                                </p>
                                <p className="input-container">
                                    <label className="text-field-input" htmlFor="product-description">Product Description</label>
                                    <input className="text-field" type="text" name="product-description" onChange={this.saveInputValue} id="productDescription" />
                                </p>
                                <p className="input-container">
                                    <label className="text-field-input" htmlFor="product-type">Product Type</label>
                                    <input className="text-field" type="text" name="product-type"  onChange={this.saveInputValue} id="productType" />
                                </p>
                                <p className="input-container">
                                    <label className="text-field-input" htmlFor="product-date">Product Date</label>
                                    <input className="text-field" type="text" name="product-date" onChange={this.saveInputValue} id="productDate" />
                                </p>
                                <p className="input-container">
                                    <label className="text-field-input" htmlFor="product-price">Product Price</label>
                                    <input className="text-field" type="number" name="product-price" onChange={this.saveInputValue} id="productPrice" />
                                </p>
                                <Link to="/products"><button id="primary-button" className="primary-btn" type="submit">
                                    Create product</button></Link>
                            </form>
                        </div>
                    </div>
                    <div className="new-product-div" id="newProductDiv">
                    <span><i class="fas fa-plus-circle"></i></span>
                        
                        <h3>You are creating a new product</h3>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default NewProduct;