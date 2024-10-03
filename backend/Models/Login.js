import mongoose from mongoose;


const userSchema = new mongoose.Schema(
    {
      mobile: {
        Type: Number,
        required: true,
      },
      password: {
        type: Number,
        required: true,
      },
      role: {
        type: String,
        enum: ['user', 'admin', 'staff'],
        default: 'user'
      }
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("User", userSchema);
  export default User;