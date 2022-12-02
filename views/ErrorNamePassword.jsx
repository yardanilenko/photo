const React = require('react');
const Layout = require('./Layout');

function ErrorNamePassword({nameCurrentUser}) {
    return (
        <Layout nameCurrentUser={nameCurrentUser}>
        <div class="alert alert-danger" role="alert">
  ИМЯ_ПОЛЬЗОВАТЕЛЯ или ПАРОЛЬ введены неправильно! Попробуйте войти еще раз
</div>
        <a class="btn btn-primary" href="/start" role="button">Вернуться назад</a>
        </Layout>
    );
}

module.exports = ErrorNamePassword;
