import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Corrida from "../components/aposta";
import Ranking from "../components/ranking";
import Rankings from "../components/rankings";
import Menu from "../components/menu";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu props={{mode:1}} />} path="/"  />
        <Route element={<Corrida />} path="/corrida-maluca" />
        <Route element={<Ranking />} path="/ranking" />
        <Route element={<Rankings />} path="/ranking-history" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
