import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <span>This page dosen't exist!</span>
      <Link className="not-found-back-link" to={"/"}>Back to home</Link>
    </div>
  );
}
