import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      isUserAuthenticated: false
    }

  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({isUserAuthenticated: true})
  }

  render () {
    if (this.state.isUserAuthenticated) {
      return (<Navigate replace to="/userProfile"/>)
    }

    

    return (
      <div>
        <center>
        <Link to="/">Home</Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
        </center>
      </div>
    )
  }
}

export default LogIn