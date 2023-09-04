import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
    //Make an API Call
    this.timer = setInterval(() => {
      console.log("Interval Called in Did mount");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        {" "}
        <h1>About</h1>
        <UserClass name={"First "} location={"Boston"} />
      </div>
    );
  }
}

export default About;
