import { useState } from "react";
import "./Country.css";
const Country = ({ country, handelClickVisitesCountry }) => {
  const [visited, setVisited] = useState(false);
  const handelClickBtn = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    handelClickVisitesCountry(country);
  };
  return (
    <div className={`countrysBox ${visited && "visitedBox"}`}>
      <img
        className="imageClass"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Name: {country.name.common}</h2>
      <p>Population : {country.population.population}</p>
      <p>
        Area : {country.area.area}
        {country.area.area > 30000 ? " Big Country" : " Small Country"}
      </p>
      {/* <p>
        Currency : {country.currencies.currencies.${country.cca3.cca3}.name}
      </p> */}
      <button onClick={handelClickBtn} className="btn-primary">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
