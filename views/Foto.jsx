const React = require('react');
const Layout = require('./Layout');

function Foto({ foto }) {
  return (
    <Layout>
      <nav>
        <div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/photo/002.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/photo/IMG_3113.JPG" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/photo/1618136368_39-p-litso-tigra-zhivotnie-krasivo-foto-47.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Следующий</span>
            </button>
          </div>
        </div>
      </nav>
    </Layout>

  );
}

module.exports = Foto;
