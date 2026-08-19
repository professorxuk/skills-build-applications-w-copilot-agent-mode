import mongoose, { Document, Model } from 'mongoose';

export interface ActivityDocument extends Document {
  user: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  calories: number;
  distanceKm?: number;
  completedAt: Date;
}

const activitySchema = new mongoose.Schema<ActivityDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true, trim: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  calories: { type: Number, required: true, min: 0 },
  distanceKm: { type: Number, min: 0 },
  completedAt: { type: Date, required: true },
}, { timestamps: true });

const Activity: Model<ActivityDocument> = mongoose.models.Activity || mongoose.model<ActivityDocument>('Activity', activitySchema);

export default Activity;
