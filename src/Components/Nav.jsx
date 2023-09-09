import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavLink style={({isActive})=>{return {color: isActive? "red":""}}} className="navbar-brand" to="/">
            {" "}
            Home
          </NavLink>
          <NavLink className="navbar-brand" to="/redux" style={({isActive})=>{return {color: isActive? "red":""}}}>Redux</NavLink>
        </ul>
      </div>
    </nav>
  );
};
