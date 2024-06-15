import "./Filter.css"

export default function Filter() {
  return (
    <div className="filter">
      <section className="filter-navigation">
        <button className="filter-lastest">Lastest</button>
        <button className="filter-popular">Popular</button>
      </section>

      <section className="filter-menu">
        <span className="filter-menu-show">Show:</span>
        <span className="filter-menu-all">All</span>
        <img src="/arrow-down-icon.png" alt="" />
      </section>
    </div>
  );
}
