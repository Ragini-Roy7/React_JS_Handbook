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
import Data_List from "./dynamic_rendering/Data_List";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import University_Stud from "./components/University_Stud";
import User from "./props/User";
import Person from "./props/Person"
import Product from "./props/Product";
import Book from "./props/Book"
import Card from "./props/Card"
import Status from "./props/Status"
import Parent from "./props/Parent"
import University from "./props/University"
import Content from "./parent_child/Content"
import Grocery from "./conditional/Grocery"
import   CheckPass from "./conditional/Password"
import  WeatherCheck  from "./conditional/Weather"
import Messages from "./conditional/Notification"
import Progress from "./conditional/ProgressCard"
import Stock from "./conditional/ProductStock"
import ProductsList from "./Hooks/FakeStoreAPI"
import "./App.css";

function App() {CheckPass
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
        <Route path="/userslist" element= {<Data_List/>} />
        <Route path="/myprofile" element= {<Profile/>} />
        <Route path= "/prodlist" element= {<ProductList/>} />
        <Route path= "/card" element= {<Card/>} />
        <Route path="/notification" element= {<Messages/>} />
    
      </Routes>
      
      <Footer/>
      <UserList/>
      <University_Stud/>
      <User/>
      <Person/>
      <Product/>
      <Book/>
      <Status/>
      <Parent/>
      <University />
      <Content/>
      <Grocery/>
      <CheckPass/>
      <WeatherCheck/>
      <Progress/>
      <Stock/>
      <ProductsList/>
      {/* <Data_List/> */}
      {/* <Greet_User name="Ragini"/> */}
      
    </>
  );
}

export default App;

