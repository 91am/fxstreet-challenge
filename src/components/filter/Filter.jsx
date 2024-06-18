import "./Filter.css"
import { useSearchParams } from "react-router-dom";

export default function Filter() {

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className="filter">

      <section className="filter-navigation">
        <button className={`filter-latest ${searchParams.get("filter") === "latest" ? "active" : ""}` }
        onClick={()=>{
          setSearchParams({filter:"latest"})
        }}
        >Lastest</button>

        <button className={`filter-popular ${searchParams.get("filter") === "popular" ? "active" : ""}`}
        onClick={()=>{
          setSearchParams({filter:"popular"})
        }}
        >Popular</button>
      </section>

      <section className="filter-menu">
        <span className="filter-menu-show">Show:</span>
        <span className="filter-menu-all">All</span>
        <img src="/arrow-down-icon.svg" alt="" />
      </section>
    </div>
  );
}
