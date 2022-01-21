import React, { Component } from 'react';
import AcctBalance from './AcctBalance';
import {Link} from 'react-router-dom';
import bankImg from './images/Bank-PNG-File.png'
import "./../Home.css"

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="title-home">
        Assignment 9: Bank of React
        </div>
        <img src={bankImg} alt="bank" />
        
        <div className="route-link">
        <Link to="/userProfile">User Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/debits">Debits</Link>
        <Link to="/credits">Credits</Link>
        </div>

        <div className="balance">
        <AcctBalance accountBalance={this.props.accountBalance}/>
        </div>

        </div>
      
    );
  }
}

export default Home;