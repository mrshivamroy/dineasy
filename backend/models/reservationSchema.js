import mongoose  from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain atleast 3 characters!"],
    maxLength: [30, "First name must contain atleast 30 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain atleast 3 characters!"],
    maxLength: [30, "Last name must contain atleast 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate : [validator.isEmail, "Please provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Exactly 10 digits
      },
      message: "Phone number must be exactly 10 digits!"
    }
  },  
  time: {
    type : String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})


export const Reservation = mongoose.model("Reservation", reservationSchema);