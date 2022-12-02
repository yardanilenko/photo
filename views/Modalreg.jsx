const React = require('react');

function Modalreg({}) {
  return (
    <div id="myModalReg" className="modalReg">

      <div className="modal-content-reg">
        <span className="close-reg">&times;</span>
        <p className="titleformmodal">Регистрация</p>
        <label htmlFor="nameInputReg" className="label">Имя пользователя</label>
        <input className="inputform" id="nameInputReg" placeholder="bibaboba@gmail.com" />
        <label htmlFor="nameInputReg" className="label">Пароль</label>
        <input className="inputform" id="passwordInputReg" placeholder="***************" />

        <button className="btn btn-success">Зарегистрироваться</button>
      </div>

    </div>
  );
}

module.exports = Modalreg;
