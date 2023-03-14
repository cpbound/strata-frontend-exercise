import Link from "next/link"
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

const User: FC = ({ username, bio, age, twitter, email, birthday }) => {




  return (
    <div className="flex justify-center">
      <Link href="/leaderboard" className="">
      <div className="flex flex-col bg-gray-100 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md  hover:bg-gray-300">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex flex-col text-left">
            <div className="font-medium text-2xl text-gray-800">{username}</div>
            <div className="flex justify-around">
              <div className="text-gray-900 text-xl mb-3 whitespace-nowrap">{age}</div>
              <div className="text-gray-900 text-xl mb-3 whitespace-nowrap"> 🎂 {birthday}</div>
            </div>
            <div className="text-gray-500 mb-3 ">{bio}</div>
            <div className="flex justify-around">
              <div className="text-gray-900 text-xl mb-3 ">📧{twitter}</div>
              <div className="text-gray-900 text-xl mb-3 ">📧{email}</div>
            </div>
            <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )

}


export default User
