import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <TailSpin ariaLabel="loading-indicator" />
        </div>
    );
};

export default Loading;