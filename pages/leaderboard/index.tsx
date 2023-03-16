import { FC, ReactNode } from "react"
import ScoreGrid from "../../components/scoreGrid"

export async function getServerSideProps(context: any) {
  const res = await fetch(`${process.env.URL}api/leaderboard`)
  const data = await res.json()
  const { leaderboard } = data

  return {
    props: {
        leaderboard
    }
  }
}


const Leaderboard: FC = (props) => {

  return (
    <ScoreGrid leaderboard={{
      sort: function (arg0: (a: any, b: any) => number): LeaderboardData {
        throw new Error("Function not implemented.")
      },
      map: function (arg0: (user: UserDetails) => JSX.Element): ReactNode {
        throw new Error("Function not implemented.")
      },
      leaderboard: []
    }} {...props}/>
  )
}

export default Leaderboard
