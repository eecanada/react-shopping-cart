import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
        title: 'Crockett & Jones Coniston 6UK',
        img: 'https://i.imgur.com/BsOO6bP.jpg',
        price: 425.0,
      },
      {
        id: 2,
        value: 2,
        title: 'Crockett & Jones Pembroke 6UK',
        img: 'https://i.imgur.com/LApcDAQ.jpg',
        price: 387.5,
      },
      {
        id: 3,
        value: 1,
        title: 'Cheaney Tenterden II 6UK',
        img: 'https://i.imgur.com/CRlGnSj.jpg',
        price: 329.17,
      },
      {
        id: 4,
        value: 1,
        title: 'Trickers Stow 6UK',
        img: 'https://i.imgur.com/PKH4WL2.jpg',
        price: 440.53,
      },
    ],
  };

  // constructor() {
  //   super();
  //   console.log('app- constructor');
  // }

  // componentDidMount() {
  //   console.log('did mount');
  // }

  handleReset = () => {
    const resetCounters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters: resetCounters });
  };

  handleIncrement = (id) => {
    const counters = [...this.state.counters];
    const found = counters.find((counter) => counter.id === id);
    found.value++;

    counters.forEach((counter) => {
      if (counter.id === found.id) counter = found;
    });

    this.setState({ counters });
  };

  handleDecrement = (id) => {
    const counters = [...this.state.counters];
    const found = counters.find((counter) => counter.id === id);
    found.value--;

    counters.forEach((counter) => {
      if (counter.id === found.id) counter = found;
    });

    this.setState({ counters });
  };

  handleDelete = (id) => {
    const filteredButtons = this.state.counters.filter(
      (counter) => counter.id !== id
    );
    this.setState({ counters: filteredButtons });
  };

  formatTotalPrice = () => {
    const values = this.state.counters.map(
      (counter) => counter.value * counter.price
    );
    let sum = values.reduce(function (a, b) {
      return a + b;
    }, 0);

    return sum.toFixed(2);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          count={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container margin-check block add-margin-top">
          <Counters
            counters={this.state.counters}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleDecrement={this.handleDecrement}
          />
        </main>

        <div className="container d-flex justify-content-between mt-5 notes-checkout">
          <div>
            <p className="sm-font-black">Add Order Note</p>
            <textarea
              placeholder="How can we help you?"
              type="text"
              rows="4"
              className="sm-font-black"
            />
          </div>
          <div className="d-flex flex-column align-items-end price-checkout">
            <p className="sm-font-black">TOTAL: £{this.formatTotalPrice()}</p>
            <p className="sm-font-grey shipping-text">{`Shipping & taxes calculated at checkout`}</p>
            <button className="checkout-button sm-font-white hbtn hb-fill-right">
              CHECKOUT
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
