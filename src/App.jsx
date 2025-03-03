import React from "react";
import UserProfileCard from "./Components/UserProfileCardFolder/UserProfileCard";
import Student from "./Components/Student";

function App() {
  return (
    <>
      <UserProfileCard />

      <Student name="oggy" age={27} isStudent={true} />
      <Student name="jack" age={30} isStudent={false} />
      <Student name="tom" age={20} isStudent={true} />
    </>
  );
}

export default App;
