import React, { useEffect, useState, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import axios from "axios";

// interface UserPageParams {
//   id: string;
// }

const User: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const res = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <button onClick={()=>navigate('/users')}>Back</button>
      <h1>Страница ползователя {user?.name}</h1>
    </div>
  );
};

export default User;
