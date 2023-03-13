
import Image from "next/image"
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
  console.log(leaderboard)



  return (
    <div className="grid-cols-1">

      {leaderboard.map((user: object) =>
        <>
          <Image width={50} height={50} alt={user.username} src={user.profileImage} />
          <h1>{user.username}</h1>
          <h2>{user.score}</h2>
        </>
      )}
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
