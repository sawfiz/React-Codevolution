import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div> Welcome Victor</div>

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Victor</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome, Victor</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    // if (this.state.isLoggedIn) {
    //   return (
    //       <div>Welcome, Victor</div>
    //   );
    // } else {
    //   return (
    //       <div>Welcome Guest</div>
    //   );
    // }
  }
}

export default UserGreeting;
