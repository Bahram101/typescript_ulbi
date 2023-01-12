import { FC, useState, useEffect } from "react";
import List from "../components/List";
import UserItem from "../components/UserItem";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClickUser={(user) => navigate(`/users/${user.id}`)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default Users;
