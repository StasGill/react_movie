import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Link } from "react-router-dom";
import "./styles.scss";

export const MovieItem = ({ image, title, id, vote_average, media_type }) => {
  const posterQuery = "https://image.tmdb.org/t/p/w300";

  return (
    <Link to={`/${id}?type=${media_type}`} className="item_container">
      <img src={`${posterQuery}${image}`} alt={title}></img>
      <div className="item_score">
        <CircularProgressbarWithChildren
          value={vote_average * 10}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "30px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(135, 198, 0)`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
          })}
        >
          <div className="item_score-margin">
            <strong>{Math.round(vote_average)}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <span>{title}</span>
    </Link>
  );
};
