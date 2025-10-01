const University_Stud = () => {
  const std_list = [
    {
      roll: 12,
      name: "Alice",
      cgpa: 7.89,
    },
    {
      roll: 13,
      name: "Maria",
      cgpa: 6.78,
    },
    {
      roll: 14,
      name: "Smatha",
      cgpa: 7.88,
    },
  ];
  return (
    <div>
      {std_list.map((std) => {
       return  <div key={std.roll}>
          <h4>Name of Student is {std.name}</h4>
          <h4>Roll is {std.roll}</h4>
          <h4>CGPA Scored is {std.cgpa}</h4>
        </div>;
      })}
    </div>
  );
};
export default University_Stud;
