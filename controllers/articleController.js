const db = require("../models");
const shortId = require("shortid");
module.exports = {
  articles: async (req, res, next) => {
    try {
      const search = await db.articles.findAndCountAll({
        where: { deleted: false },
        include: [db.authers],
        attributes: { exclude: ["autherId"] },
      });
      res.json(search);
    } catch (error) {
      next(error);
    }
  },
  articleById: (req, res, next) => {
    db.aricles
      .findOne({ where: { deleted: false, id: req.body.id } })
      .then((find) => {
        res.status.json(find);
      })
      .catch((error) => {
        next(error);
      });
  },
  articleByAuther: (req, res, next) => {
    db.aricles
      .findAndCountAll({
        where: { deleted: false, autherId: req.body.autherId },
      })
      .then((find) => {
        res.status.json(find);
      })
      .catch((error) => {
        next(error);
      });
  },
  article: (req, res, next) => {
    const { autherId, surTitre, sousTitre, chapeau, coprs, photo } = req.body;
    db.articles
      .findOne({ where: { surTitre } })
      .then((find) => {
        if (!find) {
          const value = {
            id: shortId.generate(),
            autherId,
            surTitre,
            sousTitre,
            chapeau,
            coprs,
            photo,
          };
          db.articles
            .create(value)
            .then((created) => {
              res.json(created);
            })
            .catch((error) => {
              next(error);
            });
        }
      })
      .catch((error) => {
        next(error);
      });
  },
};
