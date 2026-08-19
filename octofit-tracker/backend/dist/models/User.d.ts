import mongoose, { Document, Model } from 'mongoose';
export interface UserDocument extends Document {
    username: string;
    email: string;
    name: string;
    team?: mongoose.Types.ObjectId;
    points: number;
}
declare const User: Model<UserDocument>;
export default User;
//# sourceMappingURL=User.d.ts.map