const React = require('react');

function Navbar({ userName }) {
  return (
    <div className="headerStyle">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbarContainer">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/Users/olity/projects/phase_2/week3/photo/routes"
                >
                  Главная

                </a>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/profile"
                >
                  {userName || 'Olity'}

                </a>
                <a className="nav-link" href="/Users/olity/projects/phase_2/week3/photo/routes">
                  Добавить
                  фото

                </a>
                <a
                  className="nav-link"
                  href="/Users/olity/projects/phase_2/week3/photo/routes"
                >
                  Выйти

                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

module.exports = Navbar;
