import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend } from "../../actions/User";
import { FindSection } from "../FindSection/FindSection";
import { MovieItem } from "./MovieItem/MovieItem";
import Pagination from "@mui/material/Pagination";
import "./styles.scss";

export const Home = () => {
  const { trend } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(getTrend(value));
  };

  useEffect(() => {
    dispatch(getTrend());
  }, [dispatch]);

  return (
    <div className="home_container">
      <div className="container">
        <FindSection />
        <h1>Trend now</h1>
        <div className="movie-container">
          {trend?.results?.map((item, index) => {
            return (
              <MovieItem
                key={item.id + index}
                image={item.poster_path}
                title={item.title || item.name}
                id={item.id}
                vote_average={item.vote_average}
                media_type={item.media_type}
              />
            );
          })}
          {trend.results && (
            <div style={{ margin: "0 auto", marginBottom: "15px" }}>
              <Pagination
                count={trend?.total_pages}
                page={trend?.page}
                onChange={handleChange}
                variant="outlined"
                color="primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
