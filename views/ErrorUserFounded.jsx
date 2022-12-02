const React = require('react');
const Layout = require('./Layout');

function ErrorUserFounded({nameCurrentUser}) {
    return (
        <Layout nameCurrentUser={nameCurrentUser}>
        <div class="alert alert-danger" role="alert">
  Такое ИМЯ_ПОЛЬЗОВАТЕЛЯ уже сущетствует! Попробуйте выбрать другое
</div>
        <a class="btn btn-primary" href="/start" role="button">Вернуться назад</a>
        </Layout>
    );
}

module.exports = ErrorUserFounded;
