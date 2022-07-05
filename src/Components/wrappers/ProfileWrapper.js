import React from "react";

function ProfileWrapper({children, className=''}) {
  return (
    <div className={`acctWrapper ${className}`}>
    {children}
    </div>
  );
}

export default ProfileWrapper;
