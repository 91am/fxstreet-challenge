import { useState } from "react";
import "./Card.css";


function Card({
  title,
  feed,
  subFeed,
  author,
  companyName,
  authorImage,
  publicationTime,
  content,
}) {

  const [like, setLike]=useState(false)
  const [save, setSave]=useState(false)

  const dateStr = publicationTime;
  const date = new Date(dateStr);

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "UTC",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(date);

  return (
    <div className="card">
      <section className="category">
        <div className="sub-category">
          <img src="/search-icon.png" alt="" />
          <span className="feed">{feed}</span>
          <img src="/arrow-icon.png" alt="" />
          <span className="sub-feed">{subFeed}</span>
        </div>

        <div className="date">
          <img src="/date-icon.png" alt="" />
          <span>{formattedDate}</span>
        </div>
      </section>

      <section className="head">
        <img src={authorImage} alt="Author" />
        <div className="title">
          <div className="author-company">
            <span className="author">{author} |</span>
            <span className="company-name">{companyName}</span>
          </div>
          <h2>{title}</h2>
        </div>
      </section>

      <p
        className="content-card"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>

      <section className="options">
        <button
          className={`like-btn ${like ? "liked" : "unliked"}`}
          onClick={() => {
            setLike(!like);
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            overflow={"visible"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.5 19.2168L8.98633 17.8496C7.26107 16.2871 6.00781 15.1315 5.22656 14.3828C4.44531 13.6341 3.56641 12.7064 2.58984 11.5996C1.64583 10.4928 0.994792 9.5 0.636719 8.62109C0.278646 7.70964 0.0996094 6.7819 0.0996094 5.83789C0.0996094 4.24284 0.636719 2.89193 1.71094 1.78516C2.81771 0.678385 4.1849 0.125 5.8125 0.125C7.70052 0.125 9.26302 0.857422 10.5 2.32227C11.737 0.857422 13.2995 0.125 15.1875 0.125C16.8151 0.125 18.166 0.678385 19.2402 1.78516C20.347 2.89193 20.9004 4.24284 20.9004 5.83789C20.9004 7.10742 20.4772 8.42578 19.6309 9.79297C18.7845 11.1602 17.8568 12.3483 16.8477 13.3574C15.8711 14.3665 14.2598 15.8802 12.0137 17.8984L10.5 19.2168Z" />
          </svg>
          <span>{like ? "Liked!" : "Like"}</span>
        </button>

        <button 
        className={`save-btn ${save ? "saved" : "unsaved"}`}
        onClick={() => {
          setSave(!save)
        }}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 15 19"
            overflow={"visible"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.7246 0.125C13.278 0.125 13.75 0.336589 14.1406 0.759766C14.5638 1.18294 14.7754 1.67122 14.7754 2.22461V18.875L7.5 15.75L0.224609 18.875V2.22461C0.224609 1.67122 0.419922 1.18294 0.810547 0.759766C1.23372 0.336589 1.72201 0.125 2.27539 0.125H12.7246Z" />
          </svg>
          <span>{save ? "Saved!" : "Save"}</span>
        </button>

        <button>
          <svg
            width="17"
            height="5"
            viewBox="0 0 17 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.03516 1.03516C7.45833 0.611979 7.94661 0.400391 8.5 0.400391C9.05339 0.400391 9.54167 0.611979 9.96484 1.03516C10.388 1.45833 10.5996 1.94661 10.5996 2.5C10.5996 3.05339 10.388 3.54167 9.96484 3.96484C9.54167 4.38802 9.05339 4.59961 8.5 4.59961C7.94661 4.59961 7.45833 4.38802 7.03516 3.96484C6.61198 3.54167 6.40039 3.05339 6.40039 2.5C6.40039 1.94661 6.61198 1.45833 7.03516 1.03516ZM13.2852 1.03516C13.7083 0.611979 14.1966 0.400391 14.75 0.400391C15.3034 0.400391 15.7917 0.611979 16.2148 1.03516C16.638 1.45833 16.8496 1.94661 16.8496 2.5C16.8496 3.05339 16.638 3.54167 16.2148 3.96484C15.7917 4.38802 15.3034 4.59961 14.75 4.59961C14.1966 4.59961 13.7083 4.38802 13.2852 3.96484C12.862 3.54167 12.6504 3.05339 12.6504 2.5C12.6504 1.94661 12.862 1.45833 13.2852 1.03516ZM0.785156 1.03516C1.20833 0.611979 1.69661 0.400391 2.25 0.400391C2.80339 0.400391 3.29167 0.611979 3.71484 1.03516C4.13802 1.45833 4.34961 1.94661 4.34961 2.5C4.34961 3.05339 4.13802 3.54167 3.71484 3.96484C3.29167 4.38802 2.80339 4.59961 2.25 4.59961C1.69661 4.59961 1.20833 4.38802 0.785156 3.96484C0.361979 3.54167 0.150391 3.05339 0.150391 2.5C0.150391 1.94661 0.361979 1.45833 0.785156 1.03516Z"
              fill="#8C8D91"
            />
          </svg>
        </button>
      </section>
    </div>
  );
}

export default Card;
