const React = require('react');


function PhotoCarousel({userName, albums, isHideOwners}) {
    return (
        <div className="carouselContainer container">
            <script defer src="/js/carousel.js"/>
            <p>{JSON.stringify(albums)}</p>
            <section className="splide" aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                    <ul className="splide__list">
                        {albums && albums.length && albums.map((album) => (
                            <li className="splide__slide">
                                <div className="albumCard"
                                     style={{
                                         backgroundImage: `url(/photos/${album.preview_id})`
                                     }}
                                >
                                    <div className="albumCardInfo">
                                        <div>
                                            <h2>{album.name}</h2>
                                            {!isHideOwners &&
                                                <p>{album?.User?.name}</p>
                                            }
                                            <a href={`/albums/${album.id}`} className="btn btn-outline-primary">Go to</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

module.exports = PhotoCarousel;
