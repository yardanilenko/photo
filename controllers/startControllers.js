const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Start = require('../views/Start')
// const indicator = require('../public/js/indicator');

const {User} = require('../db/models/indexmodels');



const renderStart = (req, res) => {
    const currentUser = req.session?.nameCurrentUser
    if (currentUser){
      res.redirect('/profile')
    }
    render(Start, {currentUser}, res);
  };

// const addUserAdded = (req, res) = => {
//   return (console.log("324!!!!!!!!!!!"))
// }

  const regUser = async (req, res) => {
    const { name, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 10);
      const nameUser = await User.create({ name: name, password: hash });
      req.session.nameCurrentUser = nameUser.name;
      req.session.userId = nameUser.id
      req.session.save(() => {
        res.redirect('/profile');  // * переход после регистрации 
      });
    } catch (error) {
      // console.log("ИМЯ ОШИБКИ", error.name) //*SequelizeUniqueConstraintError
      // indicator()
      // res.send(`Error ------> reg ${error}`);
      res.redirect('/usercreated')
    }
  };

  const entryUser = async (req, res) => {
    const { name, password } = req.body;
    try {
      const user = await User.findOne({ where: { name } });
      if (user != null){
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.nameCurrentUser = user.name;
        req.session.userId = user.id
        req.session.save(() => {
          res.redirect('/profile');
        });
      } else {
        res.redirect('/wrongdata')
        console.log("0000000000000000000000","wrong pass")
      }
    } else {
      res.redirect('/wrongdata')
      console.log("0000000000000000000000","wrong name")
    }
    } catch (error) {
      res.send(`Error ------> ${error}`);
    }
  };

module.exports = { renderStart, regUser, entryUser };