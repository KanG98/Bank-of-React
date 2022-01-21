import React, { Component } from 'react';
import AcctBalance from './AcctBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <center>
        <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
        <h1>Bank of React</h1>

        <Link to="/userProfile">User Profile</Link>

        <AcctBalance accountBalance={this.props.accountBalance}/>
        </center>
      </div>
    );
  }
}

export default Home;