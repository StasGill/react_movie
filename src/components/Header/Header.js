import "./styles.scss";
import "../Home/styles.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <Link to="/">
          <span>Movies</span>
        </Link>
        <ul>
          <Link to="/movies">
            <li>movies</li>
          </Link>
          <Link to="/show">
            <li>show</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
