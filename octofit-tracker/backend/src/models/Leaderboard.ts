import mongoose, { Document, Model } from 'mongoose';

export interface LeaderboardDocument extends Document {
  user: mongoose.Types.ObjectId;
  team: mongoose.Types.ObjectId;
  points: number;
  rank: number;
}

const leaderboardSchema = new mongoose.Schema<LeaderboardDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  points: { type: Number, required: true, min: 0 },
  rank: { type: Number, required: true, min: 1 },
}, { timestamps: true });

leaderboardSchema.index({ points: -1 });

const Leaderboard: Model<LeaderboardDocument> = mongoose.models.Leaderboard || mongoose.model<LeaderboardDocument>('Leaderboard', leaderboardSchema);

export default Leaderboard;
