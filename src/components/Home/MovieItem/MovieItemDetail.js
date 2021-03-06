import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActor, getMovie, reset } from "../../../actions/User";
import "./styles.scss";
import { posterQuery } from "../../../actions/const";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const MovieItemDetail = () => {
  const { movie, cast } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const query = useQuery();
  const type = query.get("type") || 1;

  const onClickActor = (id) => {
    dispatch(getActor(id));
  };

  useEffect(() => {
    dispatch(getMovie(id, type));
  }, [dispatch, id, type]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

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
                <b>Name: </b> {movie.title || movie.name}
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
            {cast?.cast?.map((item, index) => {
              return (
                item.profile_path && (
                  <Link to={`/actor/${item.id}`} key={item.id + index}>
                    <div className="cast" onClick={() => onClickActor(item.id)}>
                      <div className="cast_img">
                        <img
                          src={`${posterQuery}${item?.profile_path}`}
                          alt={item?.name}
                        />
                      </div>
                      <p>{item?.name}</p>
                    </div>
                  </Link>
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
