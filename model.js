import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    courseOfStudy: {
      type: String,
      required: true,
      trim: true
    },
    level: {
      type: Number,
      required: true,
      min: 1
    },
    technicalSkill: {
        type: String,
        required: true,
        trim: true
      },
      areaOfInterest: {
        type: String,
        required: true,
        trim: true
      },
      ReasonToJoin: {
        type: String,
        required: true,
        trim: true
      }
  }, {
    timestamps: true 
  });

  const User = mongoose.model('User', userSchema);

export default User;

  