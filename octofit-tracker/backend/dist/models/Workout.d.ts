import { Document, Model } from 'mongoose';
export interface WorkoutDocument extends Document {
    name: string;
    description: string;
    category: string;
    difficulty: string;
    durationMinutes: number;
    exercises: string[];
    recommendedFor: string[];
}
declare const Workout: Model<WorkoutDocument>;
export default Workout;
//# sourceMappingURL=Workout.d.ts.map