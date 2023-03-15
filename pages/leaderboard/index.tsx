import Image from "next/image"
import Link from "next/link"
import { FC, ReactNode } from "react"
import ScoreGrid from "../../components/scoreGrid"

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/leaderboard')
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
      map: function (arg0: (user: UserDetails) => JSX.Element): ReactNode {
        throw new Error("Function not implemented.")
      },
      leaderboard: []
    }} {...props}/>
  )
}

export default Leaderboard
