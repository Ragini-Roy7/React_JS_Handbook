const Status_user = () => {
  return (
    <div>
      <Status isLoggedIn={true} name="Ragini" />
      <Status isLoggedIn={false} name="Guest" />
    </div>
  );
};

const Status = ({ isLoggedIn, name }) => {
  return (
    <div>
      {isLoggedIn ? <h5>Welcome back {name}</h5> : <h5>Please log in</h5>}
    </div>
  );
};

export default Status_user;
