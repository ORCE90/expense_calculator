import React from 'react'
import {Link} from 'react-router-dom'
import './Products.css'

class Products extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


filterHandler = (event) => {
    this.setState({ filterOption: event.target.value })

    }


    render() {
        return (
            <div>
                <this.props.header />
                <div className='main-div'>
                    <div className='main-wrapper'>
                        <h3>Products</h3>
                        <label htmlFor="sort">Filter by:
                        <select name="filterOption" id="sort" onChange={this.filterHandler}> 
                                <option value="date:desc">Last Purchase</option>
                                <option value="date:asc">First Purchase</option>
                                <option value="price:desc">Highest Price</option>
                                <option value="price:asc">Lowest Price</option>
                        </select>
                        </label>
                    </div>
                    

                </div>
                <this.props.table />
                <div className="add-product"> 
                     <Link to="/new-product"><span  onClick={this.newProductHandler}>New Product</span></Link>
                </div>
                
            </div>
        )
    }
}

export default Products;