import React from 'react'
import { Link, Links } from 'react-router-dom'
import logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-white-700 border-b border-zinc-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="AZ Jobs"
              />
              <span className="hidden md:block text-black text-2xl font-bold ml-2"
                >AZ Jobs</span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</Link>
                <Link
                  to="/jobs"
                  className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</Link>
                <Link
                  href="/add-job"
                  className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar