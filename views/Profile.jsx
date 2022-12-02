const React = require('react');
const Layout = require('./Layout');
const PhotoCarousel = require('../components/PhotoCarousel');

function Profile({nameCurrentUser, albums, isHideOwners}) {
    return (
        <Layout nameCurrentUser={nameCurrentUser}>
            <div className="carouselContainer">
            <h2 className="text-center">Мои фотоальбомы</h2>
            <PhotoCarousel albums={albums} isHideOwners={isHideOwners}/>
            </div>
        </Layout>
    );
}

module.exports = Profile;
