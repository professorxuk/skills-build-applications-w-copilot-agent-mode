import DataPage from './DataPage.jsx'

export default function Activities() {
  return <DataPage resource="activities" title="Activity log" description="A running record of the effort behind every result." columns={[["type", "Activity"], ["duration", "Duration"], ["calories", "Calories"], ["completedAt", "Completed"]]} />
}
