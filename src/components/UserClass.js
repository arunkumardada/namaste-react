import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DUMMY",
        location: "Dummy Location",
      },
    };
    // console.log(props.name + "Child Constructor");
  }

  async componentDidMount() {
    //Make an API Call (Quickly Render the Component=> Make an API Call => Rerender Component with Data)
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/arunkumardada");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component Did update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    // console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>{name}</h1>
        <h2>Location: {location}</h2>
        <h3>Email ID</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 * ----MOUNTING LIFE CYCLE---
 * constructor (dummy state)
 * render (dummy state)
 *  HTML (Dummy)
 *
 * Component Did Mount
 *  <API CALL>
 *  this.setState (State Variable is updated)
 *
 * ---UPDATE LIFE CYCLE---
 *  render Method( API DATA)
 *
 *  HTML Loads( New API Data)
 *
 * Component Did Update
 *
 * ----UNMOUNTING----
 * when you get away from Component(Like going to different page)
 *
 */
