import { Pagination } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../actions/User";
import { useQuery } from "../Home/MovieItem/MovieItemDetail";
import { MovieItem } from "./MovieItem";
import "./styles.scss";

export const Movies = ({ type }) => {
  const { search } = useSelector((state) => state.user);
  const query = useQuery();
  const dispatch = useDispatch();
  const searchQuery = query.get("search") || 1;

  const handleChange = (event, value) => {
    dispatch(getSearch(searchQuery, type, value));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getSearch(searchQuery, type));
  }, [dispatch, type, searchQuery]);

  return (
    <div className="movies_container">
      <div className="container">
        {search?.results?.map(
          (item) =>
            item.poster_path && (
              <MovieItem
                img={item.poster_path}
                title={item.title || item.name}
                desc={item.overview}
                id={item.id}
                key={item.id}
                type={type}
              />
            )
        )}
        {search.results && (
          <div className="pagination">
            <Pagination
              count={search?.total_pages}
              page={search?.page}
              onChange={handleChange}
              variant="outlined"
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};
