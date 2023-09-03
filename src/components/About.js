import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Arun Kumar Dada (fn Compnent)"} />
      <UserClass name={"Arun Kumar Dada (class Compnent)"} />
    </div>
  );
};

export default About;
