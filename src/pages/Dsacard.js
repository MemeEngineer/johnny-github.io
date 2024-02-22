import { DSAbank } from "../data.js";
import { NavLink } from "react-router-dom";
import "./Dsacard.css";
import SearchBar from "../components/SearchBar"

export default function Dsacard({ setDsa, setSearch, search }) {
  function handleClick(dsa) {
    setDsa(dsa);
  }
  const filterdsa = DSAbank.filter((dsa) =>
  dsa.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <SearchBar setSearch={setSearch} search={search}/>
      {filterdsa.map((data) => {
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
