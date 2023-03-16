import Image from "next/image"
import Link from "next/link"

export default function ScoreGrid(props: { leaderboard: LeaderboardData }) {

  const { leaderboard } = props

  const sortedLeaderboard = leaderboard.sort((a, b) => (b.score-a.score))

  return (
    <div className="container mx-auto px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
      {
        sortedLeaderboard.map((user: UserDetails) =>
          <div key={user.username} className="m-0">
            <Link href={`/profile/${user.username}`}>
              <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-8 md:px-8 rounded-md hover:bg-gray-300">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <Image className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" width={50} height={50} src={user.profileImage} alt={user.username} />
                  <div className="flex flex-col text-center md:text-left">
                    <div className="font-medium text-lg text-gray-800">
                      {user.username}
                    </div>
                    <div className="text-gray-500 mb-3 whitespace-nowrap">
                      Score: {user.score}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      }
    </div>
  )
}
