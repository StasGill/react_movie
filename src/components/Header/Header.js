import "./styles.scss";
import "../Home/styles.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <NavLink to="/">
          <span>Movies</span>
        </NavLink>
        <ul>
          <NavLink to="/movie?search=">
            <li>movies</li>
          </NavLink>
          <NavLink to="/show">
            <li>show</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
