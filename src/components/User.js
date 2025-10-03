import { useState } from "react";

const User = ({ username, location, email }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(4);

  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>Count2 is {count2}</h1>

      <h2>I am {username}</h2>
      <h3>I live in {location}</h3>
      <h3>You can contact me at {email}</h3>
    </div>
  );
};
export default User;
