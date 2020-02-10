import React from "react";
import "./Message.scss";

const Message = ({ text }) => {
  return (
    <div className="message-wrapper">
      <div className="avatar"></div>
      <div className="text-wrapper">
        <span className="text">{text}</span>
      </div>
    </div>
  );
};

export default Message;
