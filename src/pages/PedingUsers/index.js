import React from 'react';

const Customers = () => (
  <div className=" flex overflow-hidden bg-cool-gray-100 pb-12">

    <div className="flex-1 overflow-auto focus:outline-none max-w-7xl mx-auto py-4" tabIndex="0">

      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-8">
        <div className="mb-3">
          <div className="flex justify-between">
            <span className="rounded-md shadow-sm mt-1">
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                Filters
                <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <div className="sm:w-2/3 md:w-1/2 lg:w-1/3">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="mt-1 relative rounded-md shadow-sm">

                <input id="search" className="form-input block w-full pl-9 sm:text-sm sm:leading-5" placeholder="Search" />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="mr-3 h-4 w-4 text-gray-400" x-description="Heroicon name: search" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Segement
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  CLV ($)
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Churn Risk
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Last Ordered
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Signed Up
                </th>
                <th className="px-6 py-3 bg-gray-50" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-green-400 font-medium">
                  High
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  $1,716
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  20%
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  33
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  3 months ago
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  Nov 30, 2017
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-green-400 font-medium">
                  High
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  $1,716
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  20%
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  33
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  3 months ago
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  Nov 30, 2017
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div className="text-sm leading-5 text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-green-400 font-medium">
                  High
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  $1,716
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  20%
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  33
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  3 months ago
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  Nov 30, 2017
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Customers;
