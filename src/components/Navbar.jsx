import React from "react";
import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="row navbar-row-class">
      <div className="col-6 bg-black">
        {" "}
        <h2 className="p-2 ms-3 mt-2 text-white">Admin Control</h2>
      </div>
      <div className="col-6 bg-black">
        {" "}
        <dd className="py-3 text-white mt-2">
          Pagina de administracion de recursos de Martei.
        </dd>
      </div>
    </nav>
  );
}

export default Navbar;
