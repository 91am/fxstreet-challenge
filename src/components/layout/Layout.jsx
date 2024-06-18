import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import Filter from "../filter/Filter";
import WidgetCard from "../widget-card/WidgetCard";

import React from "react";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="topbar">
        <Topbar></Topbar>
      </div>
      <div className="filter">
        <Filter></Filter>
      </div>
      <main className="main">
        <div className="content">
          {children}
        </div>
      </main>
      <div className="widget">
        <WidgetCard></WidgetCard>
      </div>
    </div>
  );
}
