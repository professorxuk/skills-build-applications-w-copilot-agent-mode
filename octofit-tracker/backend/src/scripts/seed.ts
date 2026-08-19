import mongoose from 'mongoose';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'alex.runner', email: 'alex@example.com', name: 'Alex Morgan', points: 420 },
      { username: 'jamie.lifts', email: 'jamie@example.com', name: 'Jamie Lee', points: 365 },
      { username: 'taylor.trains', email: 'taylor@example.com', name: 'Taylor Smith', points: 310 },
      { username: 'casey.moves', email: 'casey@example.com', name: 'Casey Brown', points: 255 },
    ]);

    const teams = await Team.create([
      { name: 'Peak Performers', description: 'Consistent training and ambitious goals.', members: [users[0]._id, users[1]._id], totalPoints: 785 },
      { name: 'Steady Striders', description: 'Building healthy habits one session at a time.', members: [users[2]._id, users[3]._id], totalPoints: 565 },
    ]);

    await User.bulkWrite([
      { updateOne: { filter: { _id: users[0]._id }, update: { team: teams[0]._id } } },
      { updateOne: { filter: { _id: users[1]._id }, update: { team: teams[0]._id } } },
      { updateOne: { filter: { _id: users[2]._id }, update: { team: teams[1]._id } } },
      { updateOne: { filter: { _id: users[3]._id }, update: { team: teams[1]._id } } },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Running', durationMinutes: 35, calories: 420, distanceKm: 5.2, completedAt: new Date('2026-08-17T07:30:00Z') },
      { user: users[1]._id, type: 'Strength', durationMinutes: 45, calories: 360, completedAt: new Date('2026-08-17T18:00:00Z') },
      { user: users[2]._id, type: 'Cycling', durationMinutes: 50, calories: 510, distanceKm: 18.4, completedAt: new Date('2026-08-18T06:45:00Z') },
      { user: users[3]._id, type: 'Yoga', durationMinutes: 30, calories: 180, completedAt: new Date('2026-08-18T19:15:00Z') },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 420, rank: 1 },
      { user: users[1]._id, team: teams[0]._id, points: 365, rank: 2 },
      { user: users[2]._id, team: teams[1]._id, points: 310, rank: 3 },
      { user: users[3]._id, team: teams[1]._id, points: 255, rank: 4 },
    ]);

    await Workout.create([
      { name: 'Full Body Foundations', description: 'A balanced strength session for building consistency.', category: 'Strength', difficulty: 'beginner', durationMinutes: 30, exercises: ['Bodyweight squats', 'Push-ups', 'Reverse lunges', 'Plank'], recommendedFor: ['beginner', 'strength'] },
      { name: 'Tempo Run Builder', description: 'Intervals to improve running pace and endurance.', category: 'Cardio', difficulty: 'intermediate', durationMinutes: 35, exercises: ['Warm-up jog', 'Tempo intervals', 'Cool-down walk'], recommendedFor: ['cardio', 'running'] },
      { name: 'Mobility Reset', description: 'Gentle mobility work for recovery and range of motion.', category: 'Mobility', difficulty: 'beginner', durationMinutes: 20, exercises: ['Cat-cow', 'Worlds greatest stretch', 'Hip flexor stretch'], recommendedFor: ['recovery', 'mobility'] },
    ]);

    console.log('Database seeding complete: 4 users, 2 teams, 4 activities, 4 leaderboard entries, 3 workouts');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
