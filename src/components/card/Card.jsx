import "./Card.css";

function Card() {
  return (
    <div className="card">

      <section className="category">

        <div className="sub-category">
          <img src="/search-icon.png" alt="" />
          <span className="feed">Analysis</span>
          <img src="/arrow-icon.png" alt="" />
          <span className="sub-feed">Webinar</span>
        </div>
        
        <div className="date">
          <img src="/date-icon.png" alt="" />
          <span>hora</span>
        </div>

      </section>

      <section className="head">
        <img src="" alt="" />
        <div className="title">
          <span>FXstreet</span>
          <h2>Premium webinar</h2>
        </div>
      </section>

      <img src="" alt="" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <section className="options">
        <button className="like-btn">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5977 16.3359C12.1602 14.9362 13.3158 13.8783 14.0645 13.1621C14.8132 12.446 15.627 11.5996 16.5059 10.623C17.3848 9.64648 17.987 8.78385 18.3125 8.03516C18.6706 7.28646 18.8496 6.55404 18.8496 5.83789C18.8496 4.79622 18.4915 3.93359 17.7754 3.25C17.0918 2.56641 16.2292 2.22461 15.1875 2.22461C14.3737 2.22461 13.6087 2.45247 12.8926 2.9082C12.209 3.36393 11.737 3.94987 11.4766 4.66602H9.52344C9.26302 3.94987 8.77474 3.36393 8.05859 2.9082C7.375 2.45247 6.6263 2.22461 5.8125 2.22461C4.77083 2.22461 3.89193 2.56641 3.17578 3.25C2.49219 3.93359 2.15039 4.79622 2.15039 5.83789C2.15039 6.55404 2.31315 7.28646 2.63867 8.03516C2.99674 8.78385 3.61523 9.64648 4.49414 10.623C5.37305 11.5996 6.18685 12.446 6.93555 13.1621C7.68424 13.8783 8.83984 14.9362 10.4023 16.3359L10.5 16.4336L10.5977 16.3359ZM15.1875 0.125C16.8151 0.125 18.166 0.678385 19.2402 1.78516C20.347 2.89193 20.9004 4.24284 20.9004 5.83789C20.9004 6.7819 20.7214 7.70964 20.3633 8.62109C20.0052 9.5 19.3379 10.4928 18.3613 11.5996C17.4173 12.7064 16.5547 13.6341 15.7734 14.3828C14.9922 15.1315 13.7389 16.2871 12.0137 17.8496L10.5 19.2168L8.98633 17.8984C6.74023 15.8802 5.11263 14.3665 4.10352 13.3574C3.12695 12.3483 2.21549 11.1602 1.36914 9.79297C0.522786 8.42578 0.0996094 7.10742 0.0996094 5.83789C0.0996094 4.24284 0.636719 2.89193 1.71094 1.78516C2.81771 0.678385 4.1849 0.125 5.8125 0.125C7.70052 0.125 9.26302 0.857422 10.5 2.32227C11.737 0.857422 13.2995 0.125 15.1875 0.125Z"
              fill="#49494F"
            />
          </svg>
          <span>Like</span>
        </button>

        <button className="save-btn">
          <svg
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7246 15.75V2.22461H2.27539V15.75L7.5 13.4551L12.7246 15.75ZM12.7246 0.125C13.278 0.125 13.75 0.336589 14.1406 0.759766C14.5638 1.18294 14.7754 1.67122 14.7754 2.22461V18.875L7.5 15.75L0.224609 18.875V2.22461C0.224609 1.67122 0.419922 1.18294 0.810547 0.759766C1.23372 0.336589 1.72201 0.125 2.27539 0.125H12.7246Z"
              fill="#49494F"
            />
          </svg>

          <span>Save</span>
        </button>
      </section>
    </div>
  );
}

export default Card;
