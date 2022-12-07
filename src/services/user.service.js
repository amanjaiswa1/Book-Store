import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create a new user registration
export const registration = async (body) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(body.Password, salt);
  body.Password = hash;
  const data = await User.create(body);
  return data;
};

//user login
export const login = async (body) => {
  const data = await User.findOne({ Email: body.Email });
  if (data != null) {
    const result = await bcrypt.compare(body.Password, data.Password);
    if (result) {
      var token = jwt.sign({ FirstName: data.FirstName, Email: data.Email }, process.env.SECRET_KEY);
      return token;
    }
    else {
      throw new Error("Invalid Password");
    }
  }
  else {
    throw new Error("Invalid Email");
  }
};