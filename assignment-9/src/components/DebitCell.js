import React, {Component} from 'react';
import "./../App.css"

class DebitCell extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <tr className='tableRow'>
            <td>{this.props.debit['amount']}</td>
            <td>{this.props.debit['date']}</td>
            <td>{this.props.debit['description']}</td>
            <td>{this.props.debit['id']}</td>
        </tr>
    );
  }
}

export default DebitCell;
