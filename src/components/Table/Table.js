import React from 'react'
import {Link} from 'react-router-dom'
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="table-div">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Product Description</th>
                        <th>Purchase Date</th>
                        <th>Product Price</th>
                        <th>Product Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="first-tr" className="body-tr">
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>21.08.2019</td>
                            <td>75</td>
                            <td>
                                <Link to=""><i className="far fa-edit"></i></Link>
                                <Link to=""><i className="far fa-trash-alt"></i></Link>
                            </td>
                        </tr>
                        <tr className="body-tr">
                            <td>Coca-Cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>21.08.2019</td>
                            <td>75</td>
                            <td>
                                <Link to="/edit-product"><i className="far fa-edit"></i></Link>
                                <Link to=""><i className="far fa-trash-alt"></i></Link>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;