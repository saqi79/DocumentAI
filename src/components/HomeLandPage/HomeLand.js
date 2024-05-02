import React from "react";
import "./HomeLand.css";
import HomeVideo from "../../assets/video/bgVideo.mp4";

const HomeLand = () => {
  return (
    <>
      <div className="home-main-container">
        <div className="HomeVideo">
          <video src={HomeVideo} autoPlay loop muted className="video" />
        </div>
        <div className="home-content">
          <div className="head-title">
            <h3>Welcome to DigiMax</h3>
          </div>
          <div className="sub-head-title">
            <h2>
              Your Path to Digital <br /> Excellence
            </h2>
          </div>
          <div className="head-discrip">
            <p>
              At ligula justo morbi sagittis fusce. Accumsan magna habitant non
              habitasse litora <br /> etiam torquent. Placerat lobortis volutpat
              efficitur elementum sagittis leo amet <br /> euismod tristique.
            </p>
          </div>
          <div className="button-container">
            <div className="start-btn">
              <a href="">
                <button>Get Started</button>
              </a>
            </div>
            <div className="learn-btn">
              <a href="">
                <button>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLand;
