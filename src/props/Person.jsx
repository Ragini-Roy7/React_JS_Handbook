const Person_info = () => {
  return (
    <Person
      name="ria"
      last_name="ria"
      age={21}
    />
  );
};

const Person = (props) => {
  return (
    <div>
      <h6>Person name: {props.name}</h6>
      <h6>Person last name: {props.last_name}</h6>
      <h6>{props.age}</h6>
    </div>
  );
};

export default Person_info;
