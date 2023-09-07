import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          loggedInUser
          <UserContext.Consumer>
            {(data) => (
              <h1 className="text-xl font-bold">{data.loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First "} location={"Boston"} />
      </div>
    );
  }
}

export default About;
