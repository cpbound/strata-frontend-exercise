import { FC } from "react"
import BioCard from "../../components/bioCard"
import { GetStaticPaths, GetStaticProps } from "next"

export const getServerSidePaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}api/leaderboard`)
  const data = await res.json()
  const { leaderboard } = data

  const paths = leaderboard.map((user: ProfileData) => ({
    params: { username: user.username }
  }))

  return {
    paths, fallback: false
  }
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {

  if (params && params.username) {
    const username = params.username!
    const res = await fetch(`${process.env.URL}api/profile/${username}`)
    const data = await res.json()

    return {
      props: data
    }
  }
  return {props: {error: true}}
}


const User: FC = (props) => {

  return (
    <BioCard username={""} bio={""} age={0} twitter={""} email={""} birthday={""} {...props} />
  )
}



export default User
