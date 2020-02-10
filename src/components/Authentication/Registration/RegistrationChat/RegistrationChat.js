import React, { useState } from "react";
import Message from "./Message";
import SupportChat from "./SupportChat";
import { Input } from "../../../common";
import "./RegistrationChat.scss";

const RegistrationChat = () => {
  const messages = [
    "Hello and welcome to Company Registration of GetHired.ai.",
    "My name is David, and I am the AI of GetHired.ai and I am here to help you with your Company Profile creating process. :)",
    "On this step we require from you to fill out some information about yourself so we can proceed to next step.",
    "However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)"
  ];

  const supportPesron = {
    name: "Kelly Kapoor",
    position: "GETHIRED CHAT SUPPORT",
    email: "kelly@gethired.ai",
    phone: "+44 1632 960673",
    avatarUrl: ""
  };

  const [question, setQuestion] = useState("");

  return (
    <div className="register-chat">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message} />
        ))}
      </div>
      <div className="chat">
        <Input
          name="question"
          type="text"
          placeholder="e.g. Why I need password?"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <SupportChat person={supportPesron} />
      </div>
    </div>
  );
};

export default RegistrationChat;
