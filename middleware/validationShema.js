const Joi = require("@hapi/joi");

const auther_shema = Joi.object({
  name: Joi.string().max(25).required(),
  lastname: Joi.string().max(25).required(),
  genre: Joi.string().valid("Masculin", "Feminin"),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "org"] },
  }),
  phone: Joi.string().max(20).required(),
  password: Joi.string().min(4).required(),
});

module.exports = {
  auther_shema,
};
