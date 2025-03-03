import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/profile.jpg";
const userProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="something went wrong" />
        <div className="profile-title">Manish joshi</div>
        <div className="profile-description">
          This is author of this project
        </div>
      </div>
      <div className="profile-button">
        <a href="mailto:joshi8763@gmail.com" />
        Contact Me for help
      </div>
    </div>
  );
};
export default userProfileCard;
