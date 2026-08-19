import mongoose, { Document, Model } from 'mongoose';

export interface WorkoutDocument extends Document {
  name: string;
  description: string;
  category: string;
  difficulty: string;
  durationMinutes: number;
  exercises: string[];
  recommendedFor: string[];
}

const workoutSchema = new mongoose.Schema<WorkoutDocument>({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true, trim: true },
  difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
  durationMinutes: { type: Number, required: true, min: 1 },
  exercises: [{ type: String, required: true }],
  recommendedFor: [{ type: String }],
}, { timestamps: true });

const Workout: Model<WorkoutDocument> = mongoose.models.Workout || mongoose.model<WorkoutDocument>('Workout', workoutSchema);

export default Workout;
