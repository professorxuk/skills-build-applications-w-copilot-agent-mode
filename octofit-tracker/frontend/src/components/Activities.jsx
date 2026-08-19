import DataPage from './DataPage.jsx'

const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const activitiesEndpoint = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev/api/activities/`
  : '/api/activities/'

export default function Activities() {
  return <DataPage resource="activities" endpoint={activitiesEndpoint} title="Activity log" description="A running record of the effort behind every result." columns={[["type", "Activity"], ["duration", "Duration"], ["calories", "Calories"], ["completedAt", "Completed"]]} />
}
