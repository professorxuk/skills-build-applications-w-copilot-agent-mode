import DataPage from './DataPage.jsx'

const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const workoutsEndpoint = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev/api/workouts/`
  : '/api/workouts/'

export default function Workouts() {
  return <DataPage resource="workouts" endpoint={workoutsEndpoint} title="Workouts" description="Practical sessions to meet your body where it is today." columns={[["name", "Workout"], ["category", "Category"], ["difficulty", "Difficulty"], ["duration", "Duration"]]} />
}
