import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DebitCell from './DebitCell'

class Debits extends Component {

    constructor(props){
        super(props)
        this.handleButton = this.handleButton.bind(this)
    }

    handleButton(){
        this.props.addDebit([{'amount': 100}])
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Debits</h1>

                    <Link to="/">Home</Link>
                    {this.props.debitBills.map((d) => <DebitCell debit={d}/>)}
                    {/* {console.log(this.props.debitBills)} */}
                    <p>Account Balance: {this.props.accountBalance}</p>
                    <button onClick={this.handleButton}>Add Debit</button>

                </center>
            </div>
        );
    }
}

export default Debits;