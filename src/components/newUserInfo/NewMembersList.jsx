import React from "react";
import { Visibility } from "@mui/icons-material";
import "./newMembersInfo.css";

const NewMembersList = ({ name, role, imgSrc }) => {
  return (
    <>
      <div className="newUserInfo">
        <div className="profilePicWrapper">
          <img className="newUserPic" src={imgSrc} alt="userProfilePic" />
        </div>
        <div className="userNameWrapper">
          <span className="newUserName">{name}</span>
          <span className="newUserRole">{role}</span>
        </div>
        <button className="btnDisplay">
          <Visibility className="visibilityIcon" />
          <span className="btnText">Display</span>
        </button>
      </div>
    </>
  );
};

export default NewMembersList;
