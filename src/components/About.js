import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        {" "}
        <h1>About</h1>
        <UserClass name={"First "} />
        <UserClass name={"Second"} />
      </div>
    );
  }
}

export default About;
