import React from "react";
import Avatar from "react-avatar";
const Client = ({name}) => {
  return (
    <div className="Client">
      <Avatar name={name} size={50} round="10px" />
      <span className="userDetail">{name}</span>
    </div>
  );
};

export default Client;
