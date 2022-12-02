const React = require('react');

function Navbar({nameCurrentUser}) {
    return (
        <div className="headerStyle">
<div className="container">
                <nav className="navbar navbar-expand-lg navbarContainer">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" aria-current="page"
                                   href="/">Главная</a>
                                <a className="nav-link" aria-current="page"
                                   href="/profile">{nameCurrentUser || 'Olity'}</a>
                                <a className="nav-link" href="/upload">Добавить


                                    фото</a>
                                <a className="nav-link"
                                   href="/logout">Выйти</a>ge
                            </div>
                        </div>
                    </div>
                </nav>
            </div> 
        </div>
    )
}

module.exports = Navbar;