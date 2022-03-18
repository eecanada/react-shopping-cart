import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="row product-row">
        {/* ------------------------------------------------------------------------------------------------------------ */}
        <div className="col-1">
          <img
            style={{ maxWidth: '100px', margin: '0.5rem' }}
            src={this.props.counter.img}
            alt="tan british shoes"
            className='shoe-image'
          />
        </div>

        {/* ------------------------------------------------------------------------------------------------------------ */}
        <div className="col-4 ml-4 d-flex align-items-center justify-content-center">
          <p className="sm-font-black">{this.props.counter.title}</p>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------ */}
        <div className="col-4">
          <div className="btn-quantity" style={{marginLeft:'-31px'}}>
            <button
              onClick={() =>
                this.props.onHandleIncrement(this.props.counter.id)
              }
              className="btn m-2 sm-font-grey"
            >
              +
            </button>

            {/* className={this.getBadgeClasses()} */}
            <span className="sm-font-grey">{this.formatCount()}</span>

            <button
              onClick={() =>
                this.props.onHandleDecrement(this.props.counter.id)
              }
              className="btn m-2 sm-font-grey"
              disabled={this.disableButton()}
            >
              -
            </button>
          </div>

          <div className="btn-quantity" >
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              // className="btn btn-danger btn-sm"
              className="smest-font-grey border-remove"
              style={{marginLeft:'-59px'}}
            >
              REMOVE
            </button>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------ */}
        <div className="d-flex align-items-center justify-content-center">
          <p style={{marginLeft:'74px'}} className="sm-font-grey price">£{this.formatPrice()}</p>
        </div>
      </div>
    );
  }

  // getBadgeClasses() {
  //   let classes = 'badge badge-';
  //   classes += this.props.counter.value === 0 ? 'warning' : 'primary';
  //   return classes;
  // }

  disableButton() {
    if (this.props.counter.value === 0) {
      return true;
    }
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? '0' : value;
  }

  formatPrice() {
    const { value, price } = this.props.counter;
    const total = value * price;
    return total.toFixed(2);
  }
}

export default Counter;
