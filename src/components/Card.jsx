import React from 'react'
import Themebutton from './Themebutton'

function Card() {
  return (
     <div className="min-h-screen bg-gray-100 p-6 transition-colors duration-300 dark:bg-gray-950">

      {/* Theme Button */}
      <div className="mx-auto mb-8 flex max-w-sm justify-end">
        <Themebutton />
      </div>

      {/* Profile Card */}
      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">

        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

        {/* Profile Image */}
        <div className="-mt-14 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces"
            alt="Profile"
            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg dark:border-gray-900"
          />
        </div>

        {/* Details */}
        <div className="px-6 pb-7 pt-4 text-center">

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Krish Sharma
          </h1>

          <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
            Frontend Developer
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            I love building beautiful and responsive web
            applications using React and Tailwind CSS.
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-gray-200 py-5 dark:border-gray-700">

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                120
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Posts
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                2.4k
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Followers
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                180
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Following
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">

            <button
              onClick={() => alert("You followed Krish!")}
              className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Follow
            </button>

            <button
              onClick={() => alert("Hello!")}
              className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Message
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Card;

