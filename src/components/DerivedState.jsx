import { useState } from "react";
import "../EV.css";

// const users = [
//   { name: "alice", age: "25" },
//   { name: "Bob", age: "30" },
//   { name: "charlie", age: "35" },
//   { name: "Angled", age: "45" },
// ];

export const DericedState = () => {
  const [users, setUsers] = useState([
    { name: "alice", age: "25" },
    { name: "Bob", age: "30" },
    { name: "charlie", age: "35" },
    { name: "Angled", age: "45" },
  ]);

  return (
    <div className="main-div">
      <h1>Users List </h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <>
              <li key={index}>
                {curElem.name} - {curElem.age} year old
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
