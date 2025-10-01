// marks of university students
//parent component-> University
//child component-> Marks
const University = (props) => {
  return (
    <Marks
      std_name={[
        "ragini",
        "shalini",
        "priyanka",
        "radhika",
        "kritika",
        "smirit",
      ]}
      std_marks={[98, 89, 67, 56, 78, 98]}
    />
  );
};
// marks component
const Marks = ({ std_name, std_marks }) => {
  return (
    <div>
      <ul>
          {std_name.map((name, index) => {
            return (
              <li key={index}>
                {name} — {std_marks[index]}

           </li>
             
            
            );
          })}
      </ul>
    </div>
  );
};
export default University;