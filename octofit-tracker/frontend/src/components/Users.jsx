import DataPage from './DataPage.jsx'

const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const usersEndpoint = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev/api/users/`
  : '/api/users/'

export default function Users() {
  return <DataPage resource="users" endpoint={usersEndpoint} title="Members" description="The people making Octofit a little more motivating." columns={[["name", "Name"], ["username", "Username"], ["team", "Team"], ["points", "Points"]]} />
}
