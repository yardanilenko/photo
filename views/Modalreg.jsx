const React = require('react');
const Modalreg = ({}) => {
    return(
<div id="myModalReg" class="modalReg">

<div class="modal-content-reg">
  <span class="close-reg">&times;</span>
<p class ="titleformmodal">Регистрация</p>
<label for="nameInputReg" className="label">Имя пользователя</label>
  <input class ="inputform" id = "nameInputReg" placeholder="bibaboba@gmail.com"></input>
  <label for="nameInputReg" className="label">Пароль</label>
  <input class ="inputform" id = "passwordInputReg" placeholder="***************"></input>

  <button class="btn btn-success">Зарегистрироваться</button>
</div>

</div>
    )
}

module.exports = Modalreg;