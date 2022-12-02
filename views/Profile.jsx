const React = require('react');
const Layout = require('./Layout');
const PhotoCarousel = require('../components/PhotoCarousel');

function Profile({nameCurrentUser}) {
    return (
        <Layout nameCurrentUser={nameCurrentUser}>
            <div className="carouselContainer">
            <h2 className="text-center">Мои фотоальбомы</h2>
            <PhotoCarousel/>
            </div>
        </Layout>
    );
}

module.exports = Profile;
