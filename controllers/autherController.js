const db = require("../models");
const shortId = require("shortid");

module.exports = {
  authers: (req, res, next) => {
    db.authers.findAll().then((finds) => {
      res.status(200).json(finds);
    });
  },
  auther: (req, res, next) => {
    const { name, lastname, genre, mail, phone } = req.body;
    db.authers.findOne({ where: { mail: mail } }).then((find) => {
      if (find) {
        res.status(406).json({ message: `mail is already exist` });
      } else {
        const values = {
          id: shortId.generate(),
          name: name,
          lastname: lastname,
          genre: genre,
          mail: mail,
          phone: phone,
        };
        db.authers.create(values).then((created) => {
          res.status(200).json(created);
        });
      }
    });
  },
};
