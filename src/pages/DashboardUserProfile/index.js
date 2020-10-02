import React from 'react';
import Charts from 'components/Charts';

const Skill = ({ text }) => (
  <button
    type="button"
    className="inline-flex items-center px-8 py-2 border rounded-full mr-6 mb-2 border-gray-300 text-xs leading-4 font-medium rounded text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
  >
    {text}
  </button>
);

const DashboardUserProfile = () => (
  <div className=" flex overflow-hidden bg-cool-gray-100 pb-12">

    <div className="flex-1 overflow-auto focus:outline-none max-w-7xl mx-auto py-4 px-4" tabIndex="0">
      <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
        {/* Page header */}

        <div>
          <div className="lg:flex relatvie">
            <div className="lg:w-1/2 sm:w-full lg:mr-8 mt-8">
              <div className="bg-white overflow-hidden shadow rounded-lg ">
                <div className="p-5">

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div>
                        <img className="inline-block h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-lg leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                          Tom Cook
                        </p>
                        <p className="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                          tom.cook@gmail.com
                        </p>
                      </div>

                    </div>
                    <span className="block h-3 w-3 flex-end rounded-full text-white shadow-solid bg-green-400" />

                  </div>
                  <p className="mt-5 leading-7 font-sm text-gray-700 flex items-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    San Diego, California
                  </p>
                  <p className=" leading-7 font-sm text-gray-700 flex items-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Teacher
                  </p>
                  <p className=" leading-7 font-sm text-gray-700 flex items-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    18-25
                  </p>
                  <p className="leading-7 font-sm text-gray-700 flex items-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    100%
                  </p>
                  <p className=" leading-7 font-sm text-gray-700 flex items-center">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Guru
                  </p>

                  <div className="mt-10">
                    <h2 className="text-xl mb-3 text-bold text-gray-700"> Interests</h2>

                    <Skill
                      text="Basketball"
                    />
                    <Skill
                      text="Travel"
                    />
                    <Skill
                      text="Football"
                    />
                  </div>

                  <div className="mt-10">
                    <h2 className="text-xl mb-3 text-bold text-gray-700"> Brand Engagement</h2>
                    <div className="flex items-center">
                      <div className="mr-4 w-24 text-gray-700 font-medium">Apple</div>
                      <div className="h-4 bg-green-600 shadow-md rounded-md w-full" />
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="mr-4 w-24 text-gray-700 font-medium">Google</div>
                      <div className="h-4 bg-teal-600 shadow-md rounded-md w-full" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="content flex-grow-0 w-full mt-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="ml-5 w-64 ">
                      <dl>
                        <dt className="text-sm leading-5 font-medium text-cool-gray-500 truncate">
                          <div className="text-sm leading-7  text-cool-gray-900 flex justify-between">
                            <div>Customers </div>
                            <div className="text-right">123</div>
                          </div>
                          <div className="text-sm leading-7  text-cool-gray-900 flex justify-between">
                            <div>Historic CLV </div>
                            <div className="text-right">$123</div>
                          </div>
                        </dt>

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
