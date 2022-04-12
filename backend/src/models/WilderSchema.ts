import { Document, model, Model, Schema } from "mongoose";

// a revoir
export interface IUser extends Document {
  name: String,
  city: String,
  skills: [{ title: String, votes: Number }],
}

const WilderSchema: Schema = new Schema({
  name: String,
  city: String,
  skills: [{ title: String, votes: Number }],
});

const Wilder: Model<IUser> = model('wilder', WilderSchema);

module.exports = Wilder;

