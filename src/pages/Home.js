import React from "react";
import Cocktails from "../components/Cocktails";
import SearchForm from "../components/SearchForm";
const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <SearchForm />
        <Cocktails />
      </div>
    </section>
  );
};

export default Home;
