import React from "react";

function Fallback() {
  return (
    <div className="modal-background active" onClick={() => navigate("/")}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p className="fallback">Loading...</p>
      </div>
    </div>
  );
}

export default Fallback;
