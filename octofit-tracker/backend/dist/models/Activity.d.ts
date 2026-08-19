import mongoose, { Document, Model } from 'mongoose';
export interface ActivityDocument extends Document {
    user: mongoose.Types.ObjectId;
    type: string;
    durationMinutes: number;
    calories: number;
    distanceKm?: number;
    completedAt: Date;
}
declare const Activity: Model<ActivityDocument>;
export default Activity;
//# sourceMappingURL=Activity.d.ts.map