import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../../../actions/User";
import "./styles.scss";

export const MovieItemDetail = () => {
  const { movie, cast } = useSelector((state) => state.user);
  const posterQuery = "https://image.tmdb.org/t/p/w300";
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  return (
    <>
      {movie?.id && (
        <div className="container">
          <div className="description">
            <div className="description_image">
              <img
                src={posterQuery + movie?.poster_path}
                className="listItemImg"
                alt=""
              />
            </div>
            <div className="description_about">
              <p>
                <b>Name: </b> {movie.title}
              </p>
              <p>
                <b>Release date: </b>
                {movie.first_air_date
                  ? movie.first_air_date
                  : movie.release_date}
              </p>
              <p>
                <b> Score: </b> {movie.vote_average}
              </p>
              <p>
                <b>Genre:</b>
                {movie.genres &&
                  movie.genres.map((item) => (
                    <span key={item.name} className="description_genres">
                      {item.name}
                    </span>
                  ))}
              </p>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="cast_container">
            {cast?.cast?.map((item) => {
              return (
                item.profile_path && (
                  <div className="cast" key={item.id}>
                    <div className="cast_img">
                      <img
                        src={`${posterQuery}${item?.profile_path}`}
                        alt={item?.name}
                      />
                    </div>
                    <p>{item?.name}</p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
      {!movie?.id && (
        <div className="headerNotFound">
          <h1>Movie Not Found</h1>
        </div>
      )}
    </>
  );
};
