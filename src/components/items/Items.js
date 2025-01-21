import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import "../../index.css";
import "./Items.css";

function Items({
  item,
  handleSelect,
  handleUpdate,
  handleDelete,
  handleShowInputsUpdate,
  isUpdating,
}) {
  const [updatedName, setUpdatedName] = useState(item.name);

  return (
    <div className="items">
      {isUpdating ? (
        <div className="update-section">
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <button onClick={() => handleUpdate(item.id, updatedName)}>
            Save
          </button>
          <button onClick={() => handleShowInputsUpdate(null)}>Cancel</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={item.isSelected || false}
            onChange={() => handleSelect(item.id)}
          />
          <span
            style={{
              textDecoration: item.isSelected ? "line-through" : "none",
            }}
          >
            <span style={{ color: "#B30B04" }}>Personal</span> {item.name}
          </span>
        </div>
      )}
      <div className="btn-handlers">
        <span className="btn-remove" onClick={() => handleDelete(item.id)}>
          <FaRegTrashAlt />
        </span>
        {!isUpdating && (
          <span
            className="btn-update"
            onClick={() => handleShowInputsUpdate(item.id)}
          >
            <MdOutlineSystemUpdateAlt />
          </span>
        )}
      </div>

    </div>
  );
}

export default Items;
