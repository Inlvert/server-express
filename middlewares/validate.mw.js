const { USER_SCHEMA } = require("../validation/userValidation");


const validateUser = async (req, res, next) => {
  try {
    const user = await USER_SCHEMA.validate(req.body);
    req.user = user;
    next();
  } catch (error) {
    res.send("error hapend");
  }
};

module.exports.validateUser = validateUser;
