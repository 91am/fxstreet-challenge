import "./Filter.css"
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Filter() {

  const [searchParams, setSearchParams] = useSearchParams()
  const isMobile = useMediaQuery("only screen and (max-width: 1080px)");

  return (
    <div className="filter">
      <section className="filter-navigation">
        <button
          className={`filter-latest ${
            searchParams.get("filter") === "latest" ? "active" : ""
          }`}
          onClick={() => {
            setSearchParams({ filter: "latest" });
          }}
        >
          Lastest
        </button>

        <button
          className={`filter-popular ${
            searchParams.get("filter") === "popular" ? "active" : ""
          }`}
          onClick={() => {
            setSearchParams({ filter: "popular" });
          }}
        >
          Popular
        </button>
      </section>

      <section>
        {isMobile ? (
          <img src="/filter-icon.svg" alt="" />
        ) : (
          <div className="filter-menu">
            <span className="filter-menu-show">Show:</span>
            <span className="filter-menu-all">All</span>
            <img src="/arrow-down-icon.svg" alt="" />
          </div>
        )}
      </section>
    </div>
  );
}
