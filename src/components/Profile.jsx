//Destructure props
const Profile = ({ name }) => {
  return (
    <div>
      <h3>I`m learning react to build confidence</h3>
      <h4>I`m {name}</h4>
      <h5>
        I`m currently studying by myself not in any university as skill matters
        more than college degrees
      </h5>
      <MyInfo
        name="Ragini Roy"
        city="Patna"
        role="trainee or intern"
        skills={["HTML5", "CSS3", "JS", "React"]}
        hobbies= {["Coding","Reading articles or docs", "learning about tech sector", "upskilling myself to be better than yesterday", "spiritual chants", "self care"]}
      />
    </div>
  );
};

//using props
const MyInfo = ({ name, city, role, skills , hobbies})=>{
return (
  <div>
    <h4>My Name is {name}</h4>
    <h4>I`m currently residing in  {city}</h4>
    <h4>I`m currently undergoing trainee at a startup as a {role}</h4>
    <h4>I love to learn coding and knowing new technologies </h4>
    <p>I have hopes one day,i`ll be successful in this chosen field</p>
    <h5>Skills acquired over time:</h5>
    <ul>
      {skills.map((skill, idx) => {
       return <li key={idx} style= {{color:skill==="React" ? "green" : "black"}}>  {skill}</li>;
      })}
      <h5>Hobbies of {name}</h5>
      <ul>
       {hobbies.map((hobby,idx)=> {
        return <li key= {idx}>
            {hobby==="Coding" ? `⭐ ${hobby}` : hobby}
        </li>
       })}
      </ul>
     

    </ul>
  </div>
);
}
export default Profile;
