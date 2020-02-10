import React from "react";
import { Button } from "../../../../common";
import "./SupportChat.scss";

const SupportChat = ({
  person: { name, position, email, phone, avatarUrl }
}) => {
  return (
    <div className="support-chat">
      <div className="top-part">
        <div className="avatar" />
        <div className="person">
          <div className="name">{name}</div>
          <div className="position">{position}</div>
          <div className="email">{email}</div>
          <div className="phone">{phone}</div>
        </div>
      </div>
      <div className="bottom-part">
        <Button>+ Initiate Chat</Button>
        <div>
          (2) people in queue before you. <br />
          Average wait time {`<`}5 mins.
        </div>
      </div>
    </div>
  );
};

export default SupportChat;
