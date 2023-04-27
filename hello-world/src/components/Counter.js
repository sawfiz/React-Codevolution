import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // // setState is async.  Use callback.
    // this.setState({ count: this.state.count + 1 }, () =>
    //   console.log('callback value', this.state.count)
    // ); 
    // console.log(this.state.count); // this value lag behind
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  };

  incrementFive () {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
