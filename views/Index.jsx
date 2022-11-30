const React = require('react');
const Layout = require('./Layout');
const PhotoCarousel = require('../components/PhotoCarousel');

function Index({}) {
  return (
    <Layout>
      <PhotoCarousel/>
    </Layout>
  );
}

module.exports = Index;
