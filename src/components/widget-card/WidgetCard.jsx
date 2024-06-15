import "./WidgetCard.css";

export default function WidgetCard() {
  return <div className="widget-card">
    <section className="widget-container">
        <h3>Title widget</h3>
        <span>Subtitle widget</span>
    </section>
    <button className="widget-btn">
        <span>Link</span> 
        <span className="widget-icon"></span>
    </button>

  </div>;
}
