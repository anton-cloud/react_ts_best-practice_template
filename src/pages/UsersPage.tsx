import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "../components/List";
import UserItem from "../components/UserItem";
import { IUser } from "../types/types";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <List
      items={users}
      renterItem={(user: IUser) => (
        <UserItem
          onClick={() => history(`/users/${user.id}`)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UsersPage;
