import User from '../models/user.model';
import bcrypt from 'bcrypt';

//create a new user registration
export const registration = async (body) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(body.Password, salt);
  body.Password = hash;
  const data = await User.create(body);
  return data;
};