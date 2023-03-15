import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function BioCard(props: ProfileData) {
  const [likes, setLikes] = useState(0)
  const handleClick = () => setLikes(likes + 1)

  const { username, age, birthday, bio, twitter, email } = props

  return (
    <div className="flex justify-center">
    <div className="flex flex-col bg-gray-100 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md  hover:bg-gray-300">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex flex-col text-left">
          <div className="flex justify-around mb-3">
            <div className="font-medium text-2xl text-gray-800">{username}</div>
            <button onClick={handleClick} className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span>👍{likes}</span>
            </button>
          </div>
          <Link href="/leaderboard">
            <div className="flex justify-around mb-3">
              <div className="text-gray-900 text-xl whitespace-nowrap">{age}</div>
              <div className="text-gray-900 text-xl whitespace-nowrap"> 🎂 {birthday}</div>
            </div>
            <div className="text-gray-500 mb-3 ">{bio}</div>
            <div className="flex justify-around">
              <div className="text-gray-900 text-xl hover:font-semibold">📧{twitter}</div>
              <div className="text-gray-900 text-xl hover:font-semibold">📧{email}</div>
            </div>
            <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
