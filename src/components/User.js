import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval in Fn Component");
    }, 1000);

    //Unmounting Phase like ComponentWillUnMount in Class
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h1>Arun Kumar Dada</h1>
      <h2>Contact</h2>
      <h3>Email ID</h3>
    </div>
  );
};

export default User;
