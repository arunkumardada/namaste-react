import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <h2>Count2: {this.state.count2}</h2>

        <h1>{this.props.name}</h1>
        <h2>Contact</h2>
        <h3>Email ID</h3>
      </div>
    );
  }
}

export default UserClass;
