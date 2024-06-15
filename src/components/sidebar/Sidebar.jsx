import "./Sidebar.css";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Sidebar() {
  const isMobile = useMediaQuery("only screen and (max-width: 1080px)");
  
  return (
    <div className="sidebar">
      {isMobile ? (
        <div className="sidebar-mobile">
          <img
            className="logo-mobile"
            src="/FXStreet-premium-logo-mobile.png"
            alt=""
          />
          <section className="sidebar-mobile-icon-container">
            <span className="sidebar-mobile-icon"></span>
            <span className="sidebar-mobile-icon"></span>
          </section>
        </div>
      ) : (
        <div className="sidebar-desktop">
          <img
            className="logo-desktop"
            src="/FXStreet-premium-logo.png"
            alt=""
          />
          <nav className="side-nav">
            <ul className="side-menu">
              <li className="link-menu">Trade ideas</li>
              <li className="link-menu">Strategies</li>
              <li className="link-menu">Signals</li>
              <li className="link-menu">Events</li>
              <li className="link-menu">Recordings</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
