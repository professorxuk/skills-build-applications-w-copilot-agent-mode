import DataPage from './DataPage.jsx'

const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const leaderboardEndpoint = codeSpaceName
  ? `https://${codeSpaceName}-8000.app.github.dev/api/leaderboard/`
  : '/api/leaderboard/'

export default function Leaderboard() {
  return <DataPage resource="leaderboard" endpoint={leaderboardEndpoint} title="Leaderboard" description="See how the community is building momentum together." columns={[["user", "Athlete"], ["team", "Team"], ["points", "Points"], ["rank", "Rank"]]} />
}
