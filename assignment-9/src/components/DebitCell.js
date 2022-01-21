import React, {Component} from 'react';

class DebitCell extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <div style={{display: "block"}}>
            <p>
                Amount: {this.props.debit['amount']}
            </p>
            <p>
                Date: {this.props.debit['date']}
            </p>
            <p>
                Description: {this.props.debit['description']}
            </p>
            <p>
                Id: {this.props.debit['id']}
            </p>
            <br></br>
        </div>
    );
  }
}

export default DebitCell;