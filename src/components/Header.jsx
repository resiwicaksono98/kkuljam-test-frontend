import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header({ title, backUrl }) {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      <div className="flex items-center gap-4">
        {backUrl ? (
          <NavLink to={backUrl} className="text-3xl cursor-pointer">
            Back
          </NavLink>
        ) : (
          ""
        )}
        {backUrl ? <div className="text-3xl">|</div> : ""}
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      <NavLink
        to={"/my-pokemon"}
        className={`bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600 ${
          location.pathname === "/my-pokemon" ? "hidden" : ""
        }`}
      >
        My Pokemon List
      </NavLink>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backUrl: PropTypes.string
};

export default Header;
