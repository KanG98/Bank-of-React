import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits:[],
      credits: []
    }
  }

  componentDidMount(){
    this.getDebits()
    this.getCredits()
    this.updateAccountBalance()
  }

  getDebits = async () => {
    const res = await fetch("https://moj-api.herokuapp.com/debits")
                .then((res) => res.json())
                .then(res => {
                  this.setState({debits: res}, () =>{
                    this.updateAccountBalance()
                  })
                })
  }

  getCredits = async () => {
    const res = await fetch("https://moj-api.herokuapp.com/credits")
                .then((res) => res.json())
                .then(res => {
                  this.setState({credits: res}, () =>{
                    this.updateAccountBalance()
                  })
                })
  }

  updateAccountBalance = () => {
    let debitTotal = 0
    let creditTotal = 0
    this.state.debits.map((trans) => debitTotal += trans["amount"] )
    this.state.credits.map((trans) => creditTotal += trans["amount"] )
    this.setState({accountBalance: Math.round((debitTotal-creditTotal) * 100) / 100})
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }


  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
  );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)

    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>} />
            <Route exact path="/userProfile" element={<UserProfileComponent/>}/>
            <Route exact path="/login" element={<LogInComponent/>}/>
          </Routes>
        </div>
        <button onClick={this.setState({credits: [...this.state.credits, {'amount': 100}]})}> add credit card</button>
      </Router>
    );
  }
}

export default App;