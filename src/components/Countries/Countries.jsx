import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesData }) => {
  const countriesMainData = use(CountriesData);
  const countries = countriesMainData.countries;
  const [visitedCountres, setVisitedCountres] = useState([]);
  const handelClickVisitesCountry = (country) => {
    const newVisited = [...visitedCountres, country];
    setVisitedCountres(newVisited);
  };
  console.log(visitedCountres);
  //   console.log(countries);
  return (
    <div>
      <h1>Countries Data : {countries.length}</h1>
      <h2>Visited Country : {visitedCountres.length}</h2>

      <div className="countrisFild">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            handelClickVisitesCountry={handelClickVisitesCountry}
            country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
