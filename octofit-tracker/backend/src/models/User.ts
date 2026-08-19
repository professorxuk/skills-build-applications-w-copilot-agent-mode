import mongoose, { Document, Model } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  name: string;
  team?: mongoose.Types.ObjectId;
  points: number;
}

const userSchema = new mongoose.Schema<UserDocument>({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  name: { type: String, required: true, trim: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  points: { type: Number, required: true, default: 0, min: 0 },
}, { timestamps: true });

const User: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default User;
