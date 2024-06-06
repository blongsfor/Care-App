import mongoose from "mongoose";

const { Schema } = mongoose;

const adressSchema = new Schema({
  street: { type: String, required: true, trim: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true, trim: true },
});

const contactSchema = new Schema({
  telefon: { type: Number, required: true },
  email: { type: String, required: true, trim: true },
});

const additionalInfoSchema = new Schema({
  parents: { type: String, required: true, trim: true },
  legalRepresentative: { type: String, required: true, trim: true },
});

const clientSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  dateOfBirth: { type: Date, required: true },
  placeOfBirth: { type: String, required: true, trim: true },
  adress: { type: adressSchema.clone(), required: true },
  contact: { type: contactSchema.clone(), required: true },
  additionalInfo: { type: additionalInfoSchema.clone(), required: true },
});

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;
