import mongoose, { Document, Model } from 'mongoose';

export interface TeamDocument extends Document {
  name: string;
  description: string;
  members: mongoose.Types.ObjectId[];
  totalPoints: number;
}

const teamSchema = new mongoose.Schema<TeamDocument>({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  totalPoints: { type: Number, required: true, default: 0, min: 0 },
}, { timestamps: true });

const Team: Model<TeamDocument> = mongoose.models.Team || mongoose.model<TeamDocument>('Team', teamSchema);

export default Team;
