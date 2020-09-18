import React from "react";
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import "./styles.scss";

const PageHome = () => (
// TODO: implement page background-color $off-white
  <div className="container--full-width home">
    <Hero />
    <SearchForm className="search-form--home"/>
  </div>)

export default PageHome;
