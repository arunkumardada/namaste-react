import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //console.log(props)
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Contact</h2>
        <h3>Email ID</h3>
      </div>
    );
  }
}

export default UserClass;
