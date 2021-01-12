import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  ip_address: string;
}

interface IProps {
  setShowForm: (showForm: boolean) => void;
  addUser: (first_name: string, last_name: string, email: string) => void;
  updateUser: (
    id: number,
    first_name: string,
    last_name: string,
    email: string
  ) => void;
  userEdit: User | null;
  setUserEdit: (user: User | null) => void;
}

export default function AddUser(props: IProps) {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { setShowForm, addUser, updateUser, userEdit, setUserEdit } = props;

  const handleSubmit = () => {
    if (id) {
      updateUser(id, firstName, lastName, email);
    } else {
      addUser(firstName, lastName, email);
    }
    setShowForm(false);
    setUserEdit(null);
    setId("");
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  useEffect(() => {
    if (userEdit) {
      setId(userEdit.id);
      setFirstName(userEdit.first_name);
      setLastName(userEdit.last_name);
      setEmail(userEdit.email);
    }
    return () => {};
  }, [userEdit]);

  return (
    <div>
      <h3>{id !== "" ? "Edit User" : "Add new User"}</h3>
      <TextField
        label="First Name"
        variant="outlined"
        name="first_name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        name="last_name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email User"
        variant="outlined"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        value="Submit"
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </div>
  );
}
