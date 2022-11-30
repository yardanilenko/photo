const React = require('react');
const Modalentry = ({}) => {
    return(
<div id="myModalEntry" class="modalEntry">

<div class="modal-content-entry">
  <span class="close-entry">&times;</span>
<p class ="titleformmodal">Вход</p>
<label for="nameInputEntry" className="label">Имя пользователя</label>
  <input class ="inputform" id = "nameInputEntry" placeholder="bibaboba@gmail.com"></input>
  <label for="passwordInputEntry" className="label">Пароль</label>
  <input class ="inputform" id = "passwordInputEntry" placeholder="***************"></input>

  <button class="btn btn-success">Войти</button>
</div>

</div>
    )
}

module.exports = Modalentry;