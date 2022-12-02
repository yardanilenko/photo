const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Start = require('../views/Start')

const {User} = require('../db/models');



const renderStart = (req, res) => {
    const currentUser = req.session?.nameCurrentUser
    if (currentUser){
      res.redirect('/profile')
    }
    render(Start, {currentUser}, res);
  };



  const regUser = async (req, res) => {
    const { name, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 10);
      const nameUser = await User.create({ name: name, password: hash });
      req.session.nameCurrentUser = nameUser.name;
        req.session.userID = nameUser.id;
      req.session.save(() => {
        res.redirect('/profile');  // * переход после регистрации 
      });
    } catch (error) {
      console.log("error", error)
      res.send({error});
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
        req.session.userID = user.id;
        req.session.save(() => {
          res.redirect('/profile');
        });
      } else {
        console.log("0000000000000000000000","wrong pass")
      }
    } else {
      console.log("0000000000000000000000","wrong name")
    }
    } catch (error) {
      res.send(`Error ------> ${error}`);
    }
  };

module.exports = { renderStart, regUser, entryUser };