import React, { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import { v4 as uuidv4 } from "uuid";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  ip_address: string;
}

function App() {
  const [users, setUsers] = useState(require("./data/MOCK_DATA.json"));

  const addUser = (first_name: string, last_name: string, email: string) => {
    const newUser = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
    };

    setUsers([...users, newUser]);
  };

  const delUser = (id: number) => {
    setUsers([...users.filter((user: User) => user.id !== id)]);
  };

  const updateUser = (
    id: number,
    first_name: string,
    last_name: string,
    email: string
  ) => {
    setUsers(
      users.map((user: User) => {
        if (user.id === id) {
          user.first_name = first_name;
          user.last_name = last_name;
          user.email = email;
        }
        return user;
      })
    );
  };

  return (
    <div className="App">
      <Users
        users={users}
        addUser={addUser}
        delUser={delUser}
        updateUser={updateUser}
      />
    </div>
  );
}

export default App;
