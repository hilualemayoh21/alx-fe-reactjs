import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  return <h3>Welcome to the profile of user: {userId}</h3>;
};

export default UserProfile;
