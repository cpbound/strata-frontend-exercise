import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

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
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
      {
        leaderboard.map((user: UserDetails) =>
          <div key={user.username} className="m-0">
            <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <Image className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" width={50} height={50} src={user.profileImage} alt={user.username} />
                <div className="flex flex-col text-center md:text-left">
                  <div className="font-medium text-lg text-gray-800">{user.username}</div>
                  <div className="text-gray-500 mb-3 whitespace-nowrap">Score: {user.score}</div>
                  <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                    <Link href={`/profile/${user.username}`}>More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}


export default Leaderboard

  // <>
  //   <div className="w-full h-80 flex flex-col items-center justify-center space-y-12">
  //     <h1 className="text-4xl font-bold">Leaderboard</h1>
  //     <p>TODO: complete.</p>
  //   </div>
  // </>
