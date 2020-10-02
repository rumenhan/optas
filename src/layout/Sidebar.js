import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ title, url }) => (
  <Link to={url} className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
    {/* Heroicon name: document-report */}
    <svg className="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    { title }
  </Link>
);

const menuItems = [
  {
    title: 'Overview',
    url: '/dashboard/overview'
  },
  {
    title: 'Customers',
    url: '/dashboard/customers'
  }
];

const Sidebar = () => (
  <>
    <div className="flex items-center flex-shrink-0 px-4">
      <img className="h-8 w-auto" src="/assets/logo.svg" alt="GetOpt logo" />
    </div>
    <div className="mt-5 flex-1 flex flex-col overflow-y-auto">
      <div className="overflow-y-auto">
        <nav className="px-2 space-y-1">
          {
            menuItems.map((item, index) => (
              <NavItem
                key={index}
                title={item.title}
                url={item.url}
              />
            ))
          }
        </nav>
      </div>
      <hr className="h-px mt-6 bg-teal-700 border-none" />
      <div className="mt-6 flex-1 h-0 overflow-y-auto">
        <nav className="px-2 space-y-1">
          <a href="#" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
            {/* Heroicon name: cog */}
            <svg className="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </a>

          <a href="#" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
            {/* Heroicon name: question-mark-circle */}
            <svg className="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Help
          </a>

          <a href="#" className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
            {/* Heroicon name: shield-check */}
            <svg className="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Privacy
          </a>
        </nav>
      </div>
    </div>

  </>
);

export default Sidebar;
