import React from "react";
import UsersList from "../components/UsersList";
import image from "../../Media/pexels.jpg";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: image,
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
