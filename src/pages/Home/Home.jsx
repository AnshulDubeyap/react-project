import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //! Use navigate hook from react-router-dom
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-title">
          EventSphere: Your Gateway to Community Events
        </h1>
        <p className="home-description">
          Explore local happenings, join community events, discover new
          interests, and make lasting memories with EventSphere
        </p>
        <div className="home-buttons">
          <button className="event-button" onClick={() => navigate("/event")}>
            <p className="event-button-text">Event Finder ✨</p>
          </button>
          <button
            className="learn-button"
            onClick={() => {
              navigate("/about");
            }}
          >
            <p className="learn-button-text">Dive In ➡️</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
