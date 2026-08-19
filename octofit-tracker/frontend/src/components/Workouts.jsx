import DataPage from './DataPage.jsx'

export default function Workouts() {
  return <DataPage resource="workouts" endpoint="/api/workouts/" title="Workouts" description="Practical sessions to meet your body where it is today." columns={[["name", "Workout"], ["category", "Category"], ["difficulty", "Difficulty"], ["duration", "Duration"]]} />
}
