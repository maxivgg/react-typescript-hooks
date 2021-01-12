import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
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
  user: User;
  delUser: (id: number) => void;
  setUserEdit: (user: User) => void;
  setShowForm: (showForm: boolean) => void;
}

export default function UserItem(props: IProps) {
  const { id, first_name, last_name, email } = props.user;
  const { delUser, setUserEdit, setShowForm } = props;

  const handleEdit = () => {
    setUserEdit(props.user);
    setShowForm(true);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>{first_name + " " + last_name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => delUser(id)}
        >
          delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
