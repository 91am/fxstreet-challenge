import "./Card.css"

function Card() {
  return (
    <div className="card">
      <section className="category">
        <div className="sub-category">
          <img src="" alt="" />
          <span>Analysis</span>
          <img src="" alt="" />
          <span>Webinar</span>
        </div>
        <div className="date">
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
        <img src="" alt="" />
        <span></span>
        <img src="" alt="" />
        <span></span>
        <img src="" alt="" />
      </section>
    </div>
  );
}

export default Card;
