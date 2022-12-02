const React = require('react');
const Layout = require('./Layout');
const Modalentry = require('./Modalentry')
const Modalreg = require('./Modalreg')

function Start({currentUser}) {
  console.log({currentUser})
  return (
    <Layout currentUser={currentUser} >
      <div>
      </div>
      <div className="buttonsOnMain">
        <button id="entryButton" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Вход</button>
        <button id="registrationButton" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdropReg">Регистрация</button>
      </div>
       <Modalentry/>
       <Modalreg/>
    </Layout> 
  );
}

module.exports = Start;
