import { Link } from "react-router-dom";
import { posterQuery } from "../../actions/const";
import "./styles.scss";

export const MovieItem = ({ img, title, desc, id, type = "movie" }) => {
  return (
    <Link to={`/${id}?type=${type}`} className="movie_item">
      <div className="movie_img">
        <img src={`${posterQuery}${img}`} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
};
