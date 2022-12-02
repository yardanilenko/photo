const React = require('react');
const Layout = require('./Layout');
const Modalentry = require('./Modalentry');
const Modalreg = require('./Modalreg');

function Index({ title }) {
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
      </div>
      <div className="buttonsOnMain">
        <button id="entryButton" className="btn btn-primary btn-lg">Вход</button>
        <button id="registrationButton" className="btn btn-primary btn-lg">Регистрация</button>
      </div>
      <Modalentry />
      <Modalreg />
    </Layout>
  );
}

module.exports = Index;
