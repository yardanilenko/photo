const ReactDomServer = require('react-dom/server');
const React = require('react');

const render = (reactElement, properties, response) => {
    properties.nameCurrentUser = response.locals.nameCurrentUser;
    const reactEl = React.createElement(reactElement, properties);
    const html = ReactDomServer.renderToStaticMarkup(reactEl);
    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end();
}

module.exports = render;
