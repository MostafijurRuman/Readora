import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-error">Oops!</h1>
                <p className="mt-4 text-lg text-base-content">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="mt-2 text-base-content">
                    <i>{error?.statusText || error?.message || 'Unknown error'}</i>
                </p>
                <button
                    className="btn btn-primary mt-6"
                    onClick={handleGoHome}
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;