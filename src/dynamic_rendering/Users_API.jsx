import { useEffect, useState } from "react";
import Greet_User from "./Greet_User";

function Users_API() {
const [users, setUsers] = useState([]);

useEffect(() => {
 fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json())
   .then((data) => {
     // build array of names
     const userNames = data.map((user) => user.name);
     // updating states
     setUsers(userNames);
   });
}, []); // dependency array inside useEffect, runs only once upon mounting

return (
 <div>
   <h2>Users Greeting</h2>
   <Greet_User users={users} />
 </div>
);
}

export default Users_API;