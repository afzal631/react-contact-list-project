import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Conatct_Home from "./Conatct_Home";
import ContactAddnew from "./ContactAddnew";
import ContactEdit from "./ContactEdit";
import ContactDetails from "./ContactDetails";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          fontSize: "5rem",
          fontFamily: "system-ui",
          background: "linear-gradient(309deg, #64d6f1, #d9b9eb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        React JS Contact App
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Conatct_Home />}></Route>
          <Route path="/Add-new" element={<ContactAddnew />}></Route>
          <Route path="/employee/edit/:id" element={<ContactEdit />}></Route>
          <Route path="/employee/read/:id" element={<ContactDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
