import { FC } from "react"

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/profile')
  const data = await res
  console.log(data)

  return {
    props: {

    }
  }
}

const User: FC = () => {


  return (<>
    <div className="w-full h-80 flex flex-col items-center justify-center space-y-12">
      <h1 className="text-4xl font-bold">User</h1>
      <p>TODO: complete</p>
    </div>
  </>)

}


export default User
