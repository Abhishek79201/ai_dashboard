"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./components/Layout/Layout";

const App = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Layout>{children}</Layout>
      </Provider>
    </>
  );
};

export default App;
