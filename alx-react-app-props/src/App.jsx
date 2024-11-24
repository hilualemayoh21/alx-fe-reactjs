import ProfilePage from "./ProfilePage";
import { UserContext } from "./UserContext.js";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
  });

  return (
    <>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  );
}

export default App;
