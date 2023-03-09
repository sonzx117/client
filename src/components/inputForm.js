import React, { memo } from "react";

const inputForm = ({ label }) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-noen p-2 rounded-md w-full bg-[#e8f0fe]"
      />
    </div>
  );
};

export default memo(inputForm);
