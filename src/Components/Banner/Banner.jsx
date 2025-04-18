import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co.com/dSSwCwF/banner.png" alt="Banner Image" className='w-full mx-auto md:max-w-md' />
            </div>
            <div className='text-center space-y-4'>
                <h1 className='font-thin text-7xl text-gray-800'>Browse, Search, View, Buy</h1>
                <p>
                    Best place to browse, search, view details and purchases of top flagship phones of the current time - FlagshipFaceOff
                </p>
            </div>
        </div>
    );
};

export default Banner;