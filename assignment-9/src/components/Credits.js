import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreditCell from './CreditCell'

class Credits extends Component {

    constructor(props){
        super(props)

        this.state = {
            newTrans:{
                amount: 0,
                date: "",
                description: "",
                id: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)


    }

    handleSubmit(e){
        e.preventDefault()
        this.props.addCredit([this.state.newTrans])
    }

    handleChange(e){
        const upDatedTrans = {...this.state.newTrans}
        upDatedTrans[e.target.name] = e.target.name === 'amount' ? Number(e.target.value) : e.target.value
        this.setState({newTrans: upDatedTrans })
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Credits</h1>

                    <Link to="/">Home</Link>
                    {this.props.creditBills.map((d) => <CreditCell key={d['id']} credit={d}/>)}
                    <p>Account Balance: {this.props.accountBalance}</p>


                </center>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <label >Amount</label>
                            <input type="text" name="amount" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label >Date</label>
                            <input type="text" name="date" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label >Description</label>
                            <input type="text" name="description" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Id</label>
                            <input type="text" name="id" onChange={this.handleChange}/>
                        </div>
                        <button >Add Credit</button>
                </form>
            </div>
        );
    }
}

export default Credits;