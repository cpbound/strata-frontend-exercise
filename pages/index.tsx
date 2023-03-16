import Link from "next/link";

export default function Home() {

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
        <div className="text-left text-gray-900 px-6 py-6 font-thin italic">
              <p className="py-3">
                Hi! Chris here!
              </p>
              <p className="py-3">
                Just a little message to say thank you for actually following up and sending me a practice exercise in response to my job application. The trials and tribulations of being a junior dev straight out of a bootcamp is that most companies send you a rejection at worst and completely ignore you a best so thank you giving me a little something to practice with.
              </p>
              <p className="py-3">
                I probably didn&#39;t complete this in 4 hours (it was more like 6 give or take, with breaks in the middle 😅) but I learned a lot at the very least whilst trying to stay within the remit. I knew a little of Tailwind before this but had to learn Next.js, TypeScript and Vercel from scratch before I started so cheers for the opportunity (and I tried to cut corners as little as possible...).
              </p>
              <p className="py-3">
                So here&#39;s the site. It&#39;s functional, vaguely okay looking and does most of what it&#39;s meant to do. Maybe not the best but in a few months I&#39;ll come back to this exercise and see how I&#39;ve improved.
              </p>

              Cheers again! 👍
              <br />
              Chris
            </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                strata frontend exercise
              </h1>
              <p className="text-left mt-6 text-lg leading-8 text-gray-600">
                For this exercise, you are tasked to create two page views for a simple leaderboard website. The first is a view of the current leaderboard rankings, and the second is a simple view for a profile. You should be able to like a profile, and then be able to see that a profile is liked in both the profile and leaderboard view. Likes do not have to have persistent storage.</p>

              <p className="text-left mt-6 text-lg leading-8 text-gray-600">For additional details, please visit the README on github.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://github.com/jasperdegens/strata-frontend-exercise"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View README
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}
