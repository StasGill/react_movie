import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../actions/User";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const FindSection = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(state));
    history(`/movie?search=${state}`);
  };
  return (
    <div className="find-section">
      <h1>Find movie for today</h1>
      <form onSubmit={handleSubmit}>
        <input value={state} onChange={(e) => setState(e.target.value)}></input>
        <button type="submit">Find</button>
      </form>
    </div>
  );
};
