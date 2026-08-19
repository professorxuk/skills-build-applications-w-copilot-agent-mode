import DataPage from './DataPage.jsx'

export default function Users() {
  return <DataPage resource="users" title="Members" description="The people making Octofit a little more motivating." columns={[["name", "Name"], ["username", "Username"], ["team", "Team"], ["points", "Points"]]} />
}
