const User = (props) => {
  return (
    <UserInfo
      img="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
      alt="a flower"
      first_name="Alice"
      last_name="Marley"
      age={21}
      isStudent={true}
      projectSubmitted={true}
      hobbies={["Reading", "Writing", "Coding", "Swimming"]}
    />
  );
};

const UserInfo = ({
  img,
  alt,
  first_name,
  last_name,
  age,
  isStudent,
  projectSubmitted,
  hobbies,
}) => {
  return (
    <div>
      <img src={img} alt={alt} width="300" />
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p>{age}</p>
      <p>{isStudent}</p>
      <p>{projectSubmitted}</p>
      <ul>
        {hobbies.map((hobby, index) => {
          return <li key={index}>{hobby}</li>;
        })}
      </ul>
    </div>
  );
};
export default User;
