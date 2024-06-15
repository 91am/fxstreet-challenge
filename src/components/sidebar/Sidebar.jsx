import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo-desktop" src="/FXStreet-premium-logo.png" alt="" />
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
  );
}
