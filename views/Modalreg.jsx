const React = require('react');

function Modalreg({}) {
  return (
    <div className="modal fade" id="staticBackdropReg" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <form action="/start/register" method="POST" id="regForm">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Регистрация</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Логин</span>
                <input type="text" name="name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Пароль</span>
                <input type="text" name="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть окно</button>
              <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

module.exports = Modalreg;
