import React from 'react';

const PricePlan = () => (

  <div className="bg-gray-900">
    <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div className="text-center">
        <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
          Pricing
        </h2>
        <p className="mt- text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
          The right price for you, whoever you are
        </p>
        <p className="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.
        </p>
      </div>
    </div>

    <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
      <div className="relative z-0">
        <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-7">
            <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                <div className="flex-1 flex flex-col">
                  <div className="bg-white px-6 py-10">
                    <div>
                      <h3 className="text-center text-2xl leading-8 font-medium text-gray-900" id="tier-hobby">
                        Hobby
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">
                            79
                          </span>
                        </span>
                        <span className="text-xl leading-7 font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Pariatur quod similique
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Sapiente libero doloribus
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Vel ipsa esse repudiandae
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <a href="https://google.com" className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150" aria-describedby="tier-hobby">
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
              <div className="relative z-10 rounded-lg shadow-xl">
                <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600" />
                <div className="absolute inset-x-0 top-0 transform translate-y-px">
                  <div className="flex justify-center transform -translate-y-1/2">
                    <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                      Most popular
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <h3 className="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                      Growth
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          149
                        </span>
                      </span>
                      <span className="text-2xl leading-8 font-medium text-gray-500">
                        /month
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: check */}
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Quia rem est sed impedit magnam
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: check */}
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Dolorem vero ratione voluptates
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: check */}
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Qui sed ab doloribus voluptatem dolore
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: check */}
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Laborum commodi molestiae id et fugiat
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: check */}
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                        Nam ut ipsa nesciunt culpa modi dolor
                      </p>
                    </li>
                  </ul>
                  <div className="mt-10">
                    <div className="rounded-lg shadow-md">
                      <a href="https://google.com" className="block w-full text-center rounded-lg border border-transparent bg-blue-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150" aria-describedby="tier-growth">
                        Start your trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                <div className="flex-1 flex flex-col">
                  <div className="bg-white px-6 py-10">
                    <div>
                      <h3 className="text-center text-2xl leading-8 font-medium text-gray-900" id="tier-scale">
                        Scale
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">
                            349
                          </span>
                        </span>
                        <span className="text-xl leading-7 font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Pariatur quod similique
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Sapiente libero doloribus
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                          Vel ipsa esse repudiandae
                        </p>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <a href="https://google.com" className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150" aria-describedby="tier-scale">
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default PricePlan;
