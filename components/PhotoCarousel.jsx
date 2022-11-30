const React = require('react');


function PhotoCarousel({userName, albums, isHideOwners}) {
    return (
        <div className="carouselContainer container">
            <script defer src="/js/carousel.js" />
            <section className="splide" aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide">
                            <div className="albumCard"
                                style={{
                                    backgroundImage: "url(https://images.unsplash.com/photo-1669725337418-f81459093abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80)"
                                }}
                            >
                                <div className="albumCardInfo">
                                    <div>
                                    <h2>Photo 1</h2>
                                        {!isHideOwners &&
                                        <p>{userName || 'olity'}</p>
                                        }
                                        <button className="btn btn-outline-primary">Go to</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="albumCard"
                                style={{
                                    backgroundImage: "url(https://images.unsplash.com/photo-1669742602422-43d2d8764ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80)"
                                }}
                            >
                                <div className="albumCardInfo">
                                    <div>
                                        <h2>Photo 1</h2>
                                        <p>{userName || 'olity'}</p>
                                        <button className="btn btn-outline-primary">Go to</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="albumCard"
                                style={{
                                    backgroundImage: "url(https://images.unsplash.com/photo-1669639070423-462483f0211b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
                                }}
                            >
                                <div className="albumCardInfo">
                                    <div>
                                        <h2>Photo 1</h2>
                                        <p>{userName || 'olity'}</p>
                                        <button className="btn btn-outline-primary">Go to</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="albumCard"
                                style={{
                                    backgroundImage: "url(https://images.unsplash.com/photo-1669725337418-f81459093abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80)"
                                }}
                            >
                                <div className="albumCardInfo">
                                    <div>
                                        <h2>Photo 1</h2>
                                        <p>{userName || 'olity'}</p>
                                        <button className="btn btn-outline-primary">Go to</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="splide__slide">
                            <div className="albumCard"
                                style={{
                                    backgroundImage: "url(https://images.unsplash.com/photo-1669725337418-f81459093abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80)"
                                }}
                            ></div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

module.exports = PhotoCarousel;
