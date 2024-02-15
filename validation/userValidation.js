const yup = require('yup');

const USER_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9!@#$%^&*]{8,32}&/)
    .required(),
});

module.exports.USER_SCHEMA = USER_SCHEMA;