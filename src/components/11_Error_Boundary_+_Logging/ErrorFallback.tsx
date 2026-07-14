"use client"

import { FallbackProps } from "react-error-boundary";

// This is the UI that gets shown when something crashes.
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div role="alert" className="mx-auto my-16 max-w-md rounded-xl border border-red-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-red-700">Something went wrong</h2>
            <p className="mt-2 text-sm text-gray-600">
                Sorry, something broke. Please try again.
            </p>
            <p className="mt-3 text-xs text-gray-400">{(error as Error).message}</p>
            <button
                onClick={resetErrorBoundary}
                className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
                Try again
            </button>
        </div>
    );
}

export default ErrorFallback;
