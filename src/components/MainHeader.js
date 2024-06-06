import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header className="container-fluid bg-light">
      <div className="p-2">
        <div className="logo">
          <Link to="/" className="text-decoration-none">
            <h2 className="text-secondary">Workers</h2>
          </Link>
          <nav className="col-auto">
            <ul>
              <li>
                <Link to="/" className="text-decoration-none nav-item">
                  home
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-decoration-none nav-item">
                  favorites
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
