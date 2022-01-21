import React, {Component} from 'react';

class AcctBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AcctBalance;