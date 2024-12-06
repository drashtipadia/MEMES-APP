import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit/Save");

  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <p className="fs-4" onDoubleClick={(e) => setEditMode(true)}>
          {val}
        </p>
      )}
    </Draggable>
  );
};

export default Text;
