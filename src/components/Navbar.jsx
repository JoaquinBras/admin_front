import React from "react";
import "../css/Dashboard.css";
function Navbar() {
  return (
    <nav className="row">
      <div className="col-6">
        {" "}
        <h2 className="p-2">Mod Name</h2>
      </div>
      <div className="col-6">
        {" "}
        <dd className="py-4">
          Pagina de administracion de recursos de Martei.
        </dd>
      </div>
    </nav>
  );
}

export default Navbar;
