import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend } from "../../actions/User";

import { FindSection } from "../FindSection/FindSection";
import { MovieItem } from "./MovieItem/MovieItem";
import "./styles.scss";

export const Home = () => {
  const { trend } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrend());
  }, [dispatch]);

  return (
    <div className="home_container">
      <div className="container">
        <FindSection />
        <div className="movie-container">
          {trend?.results?.map((item) => {
            return (
              <MovieItem
                key={item.id}
                image={item.poster_path}
                title={item.title || item.name}
                id={item.id}
                vote_average={item.vote_average}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
