import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <section className="topbar-navigation">
        <span className="back-icon"></span>
        <span className="back-link">Link</span>
      </section>
      <section className="topbar-profile">
        <span className="profile-link">Link</span>
        <span className="profile-icon"></span>
        <span className="profile-icon"></span>
        <div>
          <span className="profile-info">Link</span>
          <span className="profile-icon"></span>
        </div>
      </section>
    </div>
  );
}
