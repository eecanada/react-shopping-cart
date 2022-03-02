import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <div>
        {/* <button
          onClick={this.props.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button> */}

        <table className="table container-fluid">
          <thead>
            <tr>
              <th className="border-none sm-font-grey col-5" scope="col-3">
                PRODUCT
              </th>
              <th className="border-none sm-font-grey col-5" scope="col-3">QUANTITY</th>
              <th className="border-none sm-font-grey col-2" scope="col-3">TOTAL</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody> */}
        </table>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.handleDelete}
            counter={counter}
            onHandleIncrement={this.props.handleIncrement}
            onHandleDecrement={this.props.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
