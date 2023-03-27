import React, { memo } from "react";

const inputForm = ({
  label,
  value,
  setValue,
  type,
  invalidFeilds,
  setInvalidfeilds,
  keyPayload,
}) => {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type={type || "text"}
        id="phone"
        className="outline-noen p-2 rounded-md w-full bg-[#e8f0fe]"
        value={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }))
        }
        onFocus={() => setInvalidfeilds([])}
      />
      {invalidFeilds.length > 0 &&
        invalidFeilds.some((i) => i.name === keyPayload) && (
          <small className="text-red-500 italic">
            {invalidFeilds.find((i) => i.name === keyPayload)?.message}
          </small>
        )}
    </div>
  );
};

export default memo(inputForm);
