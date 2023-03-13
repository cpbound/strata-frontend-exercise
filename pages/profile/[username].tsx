import { FC } from "react"


export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/leaderboard')
  const data = await res.json()
  const { leaderboard } = data


  const paths = leaderboard.map((user) => ({
    params: { username: user.username }
  }))

  return {
    paths, fallback: false
  }
}

export async function getStaticProps(context) {
  const id = context.params.username
  const res = await fetch(`http://localhost:3000/api/profile/${id}`)
  const data = await res.json()
  return {
    props: data
  }
}

const User: FC = (props) => {
  console.log(props.username)



  return (<>
    <div className="w-full h-80 flex flex-col items-center justify-center space-y-12">
      <h1 className="text-4xl font-bold">User</h1>
      <p>TODO: complete</p>
    </div>
  </>)

}


export default User
