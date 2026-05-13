import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
const CountriesAllData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};
const CountriesData = CountriesAllData();
// console.log(CountriesData);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Countries Data Loading.....</h2>}>
        <Countries CountriesData={CountriesData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
