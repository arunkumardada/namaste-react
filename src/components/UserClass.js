import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    //Make an API Call (Quickly Render the Component=> Make an API Call => Rerender Component with Data)
    console.log("Child Component Did Mount");
  }
  render() {
    console.log("Child render");

    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            //Never Update State Variables Directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>{this.props.name}</h1>
        <h2>Contact</h2>
        <h3>Email ID</h3>
      </div>
    );
  }
}

export default UserClass;
