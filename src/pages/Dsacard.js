import { DSAbank } from "../data.js";
import { NavLink } from "react-router-dom";
import "./Dsacard.css";

export default function Dsacard({ setDsa }) {
  function handleClick(dsa) {
    setDsa(dsa);
  }
  return (
    <div>
      {DSAbank.map((data) => {
        return (
          <div className="dsa-card">
            <NavLink to="/Dsadisplay" exact>
             
              <button className="dsa-title" onClick={() => handleClick(data)}>
                {data.title}
              </button>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
