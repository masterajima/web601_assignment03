import React,{useState} from "react";
import UserProfile from "./UserProfile";
const UserList = () => {
    const [userList, setUserList] = useState([]);
     //Appends UserProfile to List
  const addUser = () => {
    setUserList((prevState) => {
      return [...prevState, <UserProfile />];
    });
  };
  return (
    <div>
      <button onClick={addUser}>Add User</button>
      {userList.map((user, idx) => {
        return <React.Fragment key={idx}> {user} </React.Fragment>;
      })}
    </div>
  );
};
export default UserList;