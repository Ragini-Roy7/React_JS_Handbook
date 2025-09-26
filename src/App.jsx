import { Routes, Route } from "react-router-dom";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Form from "./components/Form";
import Expressions from "./components/Expressions";
// import Greet_User from "./dynamic_rendering/Greet_User";
import Users_API from "./dynamic_rendering/Users_API";
import Add_tasks from "./to_do_list/Add_tasks";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Greet />} />
        <Route path="/main" element={<MainContent />} />
        <Route path="/form" element={<Form />} />
        <Route path="/expressions" element={<Expressions />} />
        {/* added here users name from fake rest api */}
        <Route path="/users" element={<Users_API/>} />
        <Route path="/todo" element= {<Add_tasks/>} />
      </Routes>
      <Footer/>
      {/* <Greet_User name="Ragini"/> */}
      
    </>
  );
}

export default App;

