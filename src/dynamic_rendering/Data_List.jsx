// fetching data from list of users
const Data_List = () => {
  const users_info = [
    // objects
    { userName: "Erum", email: "erum11@gmail.com", location: "USA" },
    {
      userName: "Radha Shri",
      email: "shriradha@yahoo.com",
      location: "United Kingdom",
    },
    {
      userName: "Ragini Roy",
      email: "raginicodes@gmail.com",
      location: "India",
    },
    {
      userName: "Elena Smatha",
      email: "smatha@gmail.com",
      location: "India",
    },
  ];

  return (
    <div>
      <ul>
        {/*mapping over each object-array */}
        {users_info.map(({ userName, email, location }, idx) => {
           return <li key={idx}>
            <h3>users info</h3>
            <h4>User name:{userName}</h4>
            <h4>Email:{email}</h4>
            <h4>Location:{location}</h4>
          </li>;
        })}
      </ul>
    </div>
  );
};
export default Data_List;
