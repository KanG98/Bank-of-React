import React, {Component} from 'react';

class CreditCell extends Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
        <div style={{display: "block"}}>
            <p>
                Amount: {this.props.credit['amount']}
            </p>
            <p>
                Date: {this.props.credit['date']}
            </p>
            <p>
                Description: {this.props.credit['description']}
            </p>
            <p>
                Id: {this.props.credit['id']}
            </p>
            <br></br>
        </div>
    );
  }
}

export default CreditCell;