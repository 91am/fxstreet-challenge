import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import Filter from "../filter/Filter";
import WidgetCard from "../widget-card/WidgetCard";

import React from "react";

export default function Layout({ children }) {
  return (
    <div class="layout">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="topbar">
        <Topbar></Topbar>
      </div>
      <div class="filter">
        <Filter></Filter>
      </div>
      <main class="main">
        <div class="content">
          {children}
        </div>
      </main>
      <div class="widget">
        <WidgetCard></WidgetCard>
      </div>
    </div>
  );
}
