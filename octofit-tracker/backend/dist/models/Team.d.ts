import mongoose, { Document, Model } from 'mongoose';
export interface TeamDocument extends Document {
    name: string;
    description: string;
    members: mongoose.Types.ObjectId[];
    totalPoints: number;
}
declare const Team: Model<TeamDocument>;
export default Team;
//# sourceMappingURL=Team.d.ts.map