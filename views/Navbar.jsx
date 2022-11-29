const React = require('react');

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbarContainer">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="/">Главная</a>
                        <a className="nav-link" href="/">Добавить фото</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

module.exports = Navbar;