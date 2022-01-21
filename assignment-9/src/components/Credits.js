import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreditCell from './CreditCell'
import "./../App.css"

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
                <nav className='credit-nav'>
                    <p className='title'>Credits</p>                  
                    <Link to="/" className='link-to-home'>Home</Link>
                    <Link to="/debits" className="link-to-home">Debits</Link>
                </nav>
                <h4 id="account-balance-credit">
                    Account Balance:  $ <strong><em>{this.props.accountBalance}</em></strong>
                </h4>
                <table className='table-credit'>
                    <tr className='table-credit'>
                        <th className='table-credit'>Amount</th>
                        <th className='table-credit'>Date</th>
                        <th className='table-credit'>Description</th>
                        <th className='table-credit'>ID</th>
                    </tr>
                    {this.props.creditBills.map((d) => <CreditCell key={d['id']} credit={d}/>)}
                </table>

                <form onSubmit={this.handleSubmit}>
                        <div>
                            <label >Amount</label>
                            <input type="text" name="amount" onChange={this.handleChange} placeholder='ex. 123'/>
                        </div>
                        <div>
                            <label >Date</label>
                            <input type="text" name="date" onChange={this.handleChange}  placeholder='ex. 0000-00-00'/>
                        </div>
                        <div>
                            <label >Description</label>
                            <input type="text" name="description" onChange={this.handleChange}  placeholder='ex.Tasty Frozen Keyboard'/>
                        </div>
                        <div>
                            <label>ID</label>
                            <input type="text" name="id" onChange={this.handleChange}  placeholder='ex. e4d72674-b565-494c-a004-5d5761bf7890'/>
                        </div>
                        <button className="add-debit-btn">Add Credit</button>
                </form>
            </div>
        );
    }
}

export default Credits;