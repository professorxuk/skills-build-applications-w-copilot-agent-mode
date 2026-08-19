import mongoose, { Document, Model } from 'mongoose';
export interface LeaderboardDocument extends Document {
    user: mongoose.Types.ObjectId;
    team: mongoose.Types.ObjectId;
    points: number;
    rank: number;
}
declare const Leaderboard: Model<LeaderboardDocument>;
export default Leaderboard;
//# sourceMappingURL=Leaderboard.d.ts.map