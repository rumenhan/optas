import React, { useState } from 'react';
import ctx from 'classnames';
import Sidebar from './Sidebar';

const DashboardLayout = (props) => {
  const [sidebarCollapse, setSidbarCollape] = useState(true);
  const [profileCollapse, setProfileCollapse] = useState(false);

  console.log('=======+++++++++++++++++++++++=========');
  console.log('sidebarCollapse', sidebarCollapse);

  console.log('=======+++++++++++++++++++++++=========');
  return (

    <div className="h-screen flex overflow-hidden bg-cool-gray-100">
      {/* Off-canvas menu for mobile */}
      <div
        className={
          ctx({
            'lg:hidden': true,
            hidden: sidebarCollapse
          })
        }
      >
        <div className="fixed inset-0 flex z-40">
          {/*
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      */}
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-cool-gray-600 opacity-75" />
          </div>
          {/*
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      */}
          <div className={
            ctx({
              'relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-teal-600': true,
            })
          }
          >
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-cool-gray-600" aria-label="Close sidebar" onClick={() => setSidbarCollape(true)}>
                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Sidebar />
          </div>
          <div className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-teal-600 pt-5 pb-4 overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto focus:outline-none" tabIndex="0">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
          <button className="px-4 border-r border-cool-gray-200 text-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:text-cool-gray-600 lg:hidden" aria-label="Open sidebar" onClick={() => setSidbarCollape(false)}>
            {/* Heroicon name: menu-alt-1 */}
            <svg className="h-6 w-6 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {/* Search bar */}
          <div className="flex-1 px-4 flex justify-end sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">

            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 text-cool-gray-400 rounded-full hover:bg-cool-gray-100 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline focus:text-cool-gray-500" aria-label="Notifications">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative d-none">
                <div>
                  <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:bg-cool-gray-100 lg:p-2 lg:rounded-md lg:hover:bg-cool-gray-100" id="user-menu" aria-label="User menu" aria-haspopup="true">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <p className="hidden ml-3 text-cool-gray-700 text-sm leading-5 font-medium lg:block">Emilia Store</p>
                    {/* Heroicon name: chevron-down */}
                    <svg className="hidden flex-shrink-0 ml-1 h-5 w-5 text-cool-gray-400 lg:block" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/*
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            */}
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg hidden">
                  <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150" role="menuitem">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150" role="menuitem">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
