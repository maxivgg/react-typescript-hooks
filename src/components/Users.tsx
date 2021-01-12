import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import UserItem from "./UserItem";
import AddUser from "./AddUser";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  ip_address: string;
}

interface IProps {
  users: User[];
  addUser: (first_name: string, last_name: string, email: string) => void;
  delUser: (id: number) => void;
  updateUser: (
    id: number,
    first_name: string,
    last_name: string,
    email: string
  ) => void;
}

const Users = (props: IProps) => {
  const { users, addUser, delUser, updateUser } = props;
  const [showForm, setShowForm] = useState(false);
  const [userEdit, setUserEdit] = useState(null);

  return (
    <div>
      <h1>Users</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(true)}
      >
        Add user
      </Button>
      {showForm ? (
        <AddUser
          setShowForm={setShowForm}
          addUser={addUser}
          updateUser={updateUser}
          userEdit={userEdit}
          setUserEdit={setUserEdit}
        />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <UserItem
                  key={index}
                  user={user}
                  setShowForm={setShowForm}
                  delUser={delUser}
                  setUserEdit={setUserEdit}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Users;
