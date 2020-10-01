import React from 'react';

function CardSection() {
//   return <CardElement />;
  return (
    <div>
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <input id="email" className="form-input block w-full pl-10 sm:text-sm sm:leading-5" placeholder="Email" />
        </div>
      </div>
      <div className="mt-5">
        <fieldset>
          <div className="mt-1 bg-white rounded-md shadow-sm">
            <div>
              <input aria-label="Card number" className="form-input relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="Card number" />
            </div>
            <div className="-mt-px flex">
              <div className="w-1/2 flex-1 min-w-0">
                <input aria-label="Card expiration date" className="form-input relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="MM / YY" />
              </div>
              <div className="-ml-px flex-1 min-w-0">
                <input aria-label="Card CVC" className="form-input relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="CVC" />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default CardSection;
