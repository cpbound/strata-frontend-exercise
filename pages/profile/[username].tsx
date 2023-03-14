import Link from "next/link"
import { FC } from "react"
import BioCard from "../../components/bioCard"

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/leaderboard')
  const data = await res.json()
  const { leaderboard } = data


  const paths = leaderboard.map((user: ProfileData) => ({
    params: { username: user.username }
  }))

  return {
    paths, fallback: false
  }
}

export async function getStaticProps(context) {
  console.log(context)
  const id = context.params.username
  const res = await fetch(`http://localhost:3000/api/profile/${id}`)
  const data = await res.json()
  return {
    props: data
  }
}


const User: FC = (props) => {

  return (
    <BioCard user={props} />
  )
}



export default User
