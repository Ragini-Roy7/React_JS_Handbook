// const Greet_User= ({user})=> {
//     return(
//         <div>
//          <h3>Hello {user}</h3>

//         </div>
//     )
// }
// export default Greet_User;
const Greet_User = ({ name, users = [] }) => {
  return (
    <div>
      {/* Single name greeting */}
      {name && <h3>Hello {name}</h3>}

      {/* Greetings for array of users */}
      {users.map((u, i) => (
        <h3 key={i}>Hello {u}</h3>
      ))}
    </div>
  );
};

export default Greet_User;
