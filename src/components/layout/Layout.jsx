import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import Filter from "../filter/Filter";
import WidgetCard from "../widget-card/WidgetCard";
import {useMediaQuery} from "@uidotdev/usehooks";


export default function Layout({ children }) {
  const isMobile = useMediaQuery("only screen and (max-width: 1080px)");

  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="topbar">
        <Topbar/>
      </div>
      <div className="filter">
        <Filter/>
      </div>
      <main className="main">
        <div className="content">
          {children}
          {isMobile && <WidgetCard/>}
        </div>
      </main>
      {!isMobile && (
        <div className="widget">
          <WidgetCard/>
        </div>
      )}
    </div>
  );
}
