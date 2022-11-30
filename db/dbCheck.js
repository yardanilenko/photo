const { sequelize } = require('./models/indexmodels');
module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена.');
  } catch (error) {
    console.error('База не подключена.', error.message);
  }
};
