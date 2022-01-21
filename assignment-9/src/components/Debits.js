import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DebitCell from './DebitCell'
import "./../App.css"


class Debits extends Component {

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
        this.props.addDebit([this.state.newTrans])
    }

    handleChange(e){
        const upDatedTrans = {...this.state.newTrans}
        upDatedTrans[e.target.name] = e.target.name === 'amount' ? Number(e.target.value) : e.target.value
        this.setState({newTrans: upDatedTrans })
    }

    render() {
        return (
            <div>
                <nav>
                    <p className='title'>Debits</p>                  
                    <Link to="/" className='link-to-home'>Home</Link>
                </nav>
                <h4 id="account-balance">
                    Account Balance:  $ <strong><em>{this.props.accountBalance}</em></strong>
                </h4>
                <table>
                    <tr>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Id</th>
                    </tr>
                    {this.props.debitBills.map((d) => <DebitCell key={d['id']} debit={d}/>)}
                </table>


                <form onSubmit={this.handleSubmit}>
                        <div>
                            <label >Amount</label>
                            <input type="text" name="amount" onChange={this.handleChange} placeholder='123'/>
                        </div>
                        <div>
                            <label >Date</label>
                            <input type="text" name="date" onChange={this.handleChange}  placeholder='0000-00-00'/>
                        </div>
                        <div>
                            <label >Description</label>
                            <input type="text" name="description" onChange={this.handleChange}  placeholder='Tasty Frozen Keyboard'/>
                        </div>
                        <div>
                            <label>Id</label>
                            <input type="text" name="id" onChange={this.handleChange}  placeholder='e4d72674-b565-494c-a004-5d5761bf7890'/>
                        </div>
                        <button className="add-debit-btn">Add Debit</button>
                </form>
            </div>
        );
    }
}

export default Debits;
