import React, {Component} from 'react';

class CreditCell extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <tr className='tableRow'>
                <td>{this.props.credit['amount']}</td>
                <td>{this.props.credit['date']}</td>
                <td>{this.props.credit['description']}</td>
                <td>{this.props.credit['id']}</td>
            </tr>
        );
      }
}

export default CreditCell;