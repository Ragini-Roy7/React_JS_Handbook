const UserList = () => {
  const usersInfo = [
    {
      id: 1,
      name: "Ragini",
      age: 22,
    },
    {
      id: 2,
      name: "Shalini",
      age: 21,
    },
    {
      id: 3,
      name: "Sneha",
      age: 22,
    },
  ];
  return (
    <div>
      <main>
        <h3>Users Info</h3>
        {usersInfo.map((user) => {
           return <ul>
             <li>{user.id}</li>
            <li> {user.name}</li>
            <li>{user.age}</li>
          </ul>
        })}
      </main>
    </div>
  );
};
export default UserList;