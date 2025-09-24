import { Link } from "react-router-dom";
//for smoother page navigation, using react-router-dom

const Header = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/">Home</Link> | {""}
        <Link to="/main">Main</Link> | {""}
        <Link to="/form">Form</Link> | {""}
        <Link to="/expresssions">Expresssions</Link> |{""}
        <Link to="/users">Users</Link> | {""}
      </nav>
    </div>
  );
};
export default Header;
