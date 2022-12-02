const React = require('react');
const Layout = require('./Layout');
const PhotoCarousel = require('../components/PhotoCarousel');

function Index({nameCurrentUser,albums}) {
  return (
    <Layout nameCurrentUser={nameCurrentUser}>
      <PhotoCarousel albums={albums}/>
    </Layout>
  );
}

module.exports = Index;
