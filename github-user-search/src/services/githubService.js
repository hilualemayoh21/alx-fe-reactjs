import React, { useState } from "react";
import axios from "axios";

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    console.log(response);
    return response.data;
  } catch (err) {
    console.log("failed to fatch error occured");
    throw err;
  }
};

export default fetchUserData;
