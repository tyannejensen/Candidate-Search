import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/SavedCandidates">Saved Candidates</Link>
      </div>
    </nav>
  )
};

export default Nav;
