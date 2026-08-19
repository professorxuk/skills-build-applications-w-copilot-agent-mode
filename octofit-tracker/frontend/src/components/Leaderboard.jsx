import DataPage from './DataPage.jsx'

export default function Leaderboard() {
  return <DataPage resource="leaderboard" endpoint="/api/leaderboard/" title="Leaderboard" description="See how the community is building momentum together." columns={[["user", "Athlete"], ["team", "Team"], ["points", "Points"], ["rank", "Rank"]]} />
}
