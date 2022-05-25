import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActor, reset } from "../../../actions/User";
import "./styles.scss";
import { posterQuery } from "../../../actions/const";
import { InstagramIcon } from "../../../assets/InstagramIcon.js";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ActorDetail = () => {
  const { actor } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const query = useQuery();
  const type = query.get("type") || 1;

  const onClickActor = (id) => {
    dispatch(getActor(id));
  };

  useEffect(() => {
    dispatch(getActor(id));
  }, [dispatch, id, type]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <>
      {actor?.id && (
        <div className="container">
          <div className="description">
            <div className="description_image">
              <img
                src={posterQuery + actor?.profile_path}
                className="listItemImg"
                alt=""
              />
              {actor.instagram_id && (
                <a
                  href={`https://www.instagram.com/${actor.instagram_id}`}
                  target="blank"
                >
                  <InstagramIcon />
                </a>
              )}
            </div>
            <div className="description_about">
              <p>
                <b>Name: </b> {actor.name}
              </p>
              <p>
                <b>Birthday: </b> {actor.birthday}
              </p>
              <p>
                <b>Biography </b>
              </p>

              <p>{actor.biography}</p>
            </div>
          </div>
          <div className="cast_container">
            {actor?.cast?.map((item) => {
              return (
                item.poster_path && (
                  <Link to={`/${item.id}?type=movie`} key={item.id}>
                    <div className="cast" onClick={() => onClickActor(item.id)}>
                      <div className="cast_img">
                        <img
                          src={`${posterQuery}${item?.poster_path}`}
                          alt={item?.title}
                        />
                      </div>
                      <p>{item?.title}</p>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
        </div>
      )}
      {!actor?.id && (
        <div className="headerNotFound">
          <h1>Actor Not Found</h1>
        </div>
      )}
    </>
  );
};
