import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
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

  const { leaderboard } = props

  return (
    <ScoreGrid props={leaderboard}/>
  )
}

export default Leaderboard
