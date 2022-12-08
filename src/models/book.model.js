import { Schema, model } from 'mongoose';

const bookSchema = new Schema({}, { strict: false });

export default model('', bookSchema, "books");