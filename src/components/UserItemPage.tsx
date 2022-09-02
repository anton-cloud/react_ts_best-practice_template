import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const history = useNavigate();

  useEffect(() => {
    fetchUserItem();
  }, []);

  async function fetchUserItem() {
    try {
      const response = await axios.get<IUser | null>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={() => history("/users")}>back</button>
      <div>
        {user?.id}.{user?.name}, {user?.email} lives in {user?.address.city}
      </div>
    </>
  );
};

export default UserItemPage;
