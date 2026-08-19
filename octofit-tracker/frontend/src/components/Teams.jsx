import DataPage from './DataPage.jsx'

export default function Teams() {
  return <DataPage resource="teams" title="Teams" description="Find your crew, share the work, and celebrate the wins." columns={[["name", "Team"], ["members", "Members"], ["totalPoints", "Total points"], ["createdAt", "Created"]]} />
}
