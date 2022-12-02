const React = require('react');

function Modalentry({}) {
  return (
    <div id="myModalEntry" className="modalEntry">

      <div className="modal-content-entry">
        <span className="close-entry">&times;</span>
        <p className="titleformmodal">Вход</p>
        <label htmlFor="nameInputEntry" className="label">Имя пользователя</label>
        <input className="inputform" id="nameInputEntry" placeholder="bibaboba@gmail.com" />
        <label htmlFor="passwordInputEntry" className="label">Пароль</label>
        <input className="inputform" id="passwordInputEntry" placeholder="***************" />

        <button className="btn btn-success">Войти</button>
      </div>

    </div>
  );
}

module.exports = Modalentry;
