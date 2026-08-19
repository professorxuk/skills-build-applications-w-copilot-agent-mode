import DataPage from './DataPage.jsx'

const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const teamsEndpoint = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev/api/teams/`
  : '/api/teams/'

export default function Teams() {
  return <DataPage resource="teams" endpoint={teamsEndpoint} title="Teams" description="Find your crew, share the work, and celebrate the wins." columns={[["name", "Team"], ["members", "Members"], ["totalPoints", "Total points"], ["createdAt", "Created"]]} />
}
