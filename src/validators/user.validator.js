import Joi from '@hapi/joi';

export const registrationValidator = (req, res, next) => {
  const schema = Joi.object({
    FirstName: Joi.string().min(3).required(),
    LastName: Joi.string().min(3).required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(6).required()
  });
  const { error } = schema.validate(req.body);
  if (error) {
    next(error);
  }
  else {
    next();
  }
}; 