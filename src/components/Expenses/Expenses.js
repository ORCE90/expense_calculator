import React, { Component } from 'react';
import '../Expenses/Expenses.css';
import {Link} from 'react-router-dom'

class Expenses extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            monthlyDisplay: false,
            yearlyDisplay: true,
            active: false,
            filter: null,
            yearlySelected: null
        }
        this.year = (new Date()).getFullYear() - 20;
        this.years = Array.from(new Array(21), (val, index) => index + this.year);
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];
    }

    yearlySelect = () => {
        this.setState({ monthlyDisplay: false, yearlyDisplay: true, active: false, yearlySelected: 'all', filter: null })
    }

    monthlySelect = () => {
        this.setState({ yearlyDisplay: false, monthlyDisplay: true, active: true, yearlySelected: 'all', filter: null })
    }

    yearlySelectHandler = (event) => {
        this.setState({ yearlySelected: event.target.value })
    }
    monthlySelectHandler = (event) => {
        this.setState({ filter: event.target.value })
    }

    render () {
        let yearly =
        <select name="year-select" className="month-select" onChange={this.yearlySelectHandler}>
            <option defaultChecked value='all' > ALL</option>
            {this.years.map((year, index) => {
                return <option key={`year${index}`} value={year}>{year}</option>
            })}
        </select>;



    let monthly = (
        <select name="month-select" className="month-select select-box" onChange={this.monthlySelectHandler}>
            <option defaultChecked>Month</option>
            {this.months.map((month, index) => {
                return <option key={`month${index}`} value={month}>{month}</option>
            })}
        </select>)

    let yearMonthly = (
        <div className="yearMonthly-div">
            {monthly}
            {yearly}
        </div>
    )
        return (
            <React.Fragment>
                <this.props.header />
                <div>
                    <div className="title-wrapper">
                        <div className="title">
                            <h3>Expenses</h3>
                        </div>

                        
                    </div>
                    <div className="expenses-div">
                        <div className='expenses'>
                            <Link to="#"><button className={!this.state.active ? 'active-btn select-btn' : 'select-btn'} onClick={this.yearlySelect}>Yearly</button></Link>
                    <Link to="#"><button className={this.state.active ? 'active-btn select-btn' : 'select-btn'} onClick={this.monthlySelect}>Monthly</button></Link>

                        <div className="option-select-div">
                        {this.state.monthlyDisplay ? <label htmlFor="month-select">Choose month and year:</label> : <label htmlFor="year-select">Choose year:</label>}
                        {this.state.monthlyDisplay ? yearMonthly : yearly}
                            {/* <select name="month-select" className="month-select select-box" onChange={this.monthlySelectHandler}>
                            <option checked>Month</option>
                            <option value=""></option>
                        </select> */}
                        </div>
                    </div>
                        </div>
                    
            
                </div>
                <this.props.table/>

            </React.Fragment>
        )
    }
}
export default Expenses;
