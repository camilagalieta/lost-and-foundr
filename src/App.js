import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewItem from "./components/NewItem";
import ItemCheckout from "./components/ItemCheckout";

import { RecoveredView } from "./views/recovered-view";
import { LostView } from "./views/lost-view";
import { RegisterItemView } from "./views/register-item";
import { ItemDetailsView } from "./views/item-details";
import { NavbarWidget } from "./widgets/navbar";

export default function App() {
  return (
    <>
      <NavbarWidget />
      <div style={{ margin: "130px 0" }} />
      <Router>
        <Routes>
          <Route path="/" element={<LostView />} />
          <Route path="/lost" element={<LostView />} />
          <Route path="/recovered" element={<RecoveredView />} />
          <Route path="/register" element={<RegisterItemView />} />
          <Route path="/details/*" element={<ItemDetailsView />} />

          <Route path="/item-checkout" element={<ItemCheckout />} />
        </Routes>
      </Router>
    </>
  );
}
