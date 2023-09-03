import { useState } from "react";

const User = () => {
  const [count] = useState(0);
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
