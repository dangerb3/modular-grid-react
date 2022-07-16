import React from "react";
import Container from "../Container/Container";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Filter />
      <Container />
      <Pagination />
    </div>
  );
};

export default App;
