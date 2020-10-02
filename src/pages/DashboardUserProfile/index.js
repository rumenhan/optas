import React from 'react';
import Charts from 'components/Charts';

const DashboardUserProfile = () => (
  <div className=" flex overflow-hidden bg-cool-gray-100 pb-12">

    <div className="flex-1 overflow-auto focus:outline-none max-w-7xl mx-auto py-4" tabIndex="0">
      <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
        {/* Page header */}

        <div>
          <div className="lg:flex relatvie">
            <div className="flex-1 flex flex-col lg:w-1/3">
              <div className="bg-white overflow-hidden shadow rounded-lg sm:w-full lg:mr-8 mt-8">
                <div className="p-5">

                  <div className="flex items-center">
                    <div>
                      <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                        Tom Cook
                      </p>
                      <p className="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                        View profile
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="content flex-grow-0 w-full mt-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: scale */}
                      <svg className="h-6 w-6 text-cool-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm leading-5 font-medium text-cool-gray-500 truncate">
                          Total Customers
                        </dt>
                        <dd>
                          <div className="text-lg leading-7 font-medium text-cool-gray-900">
                            15,938
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  </div>
);

export default DashboardUserProfile;
