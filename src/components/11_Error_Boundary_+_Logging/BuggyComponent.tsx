"use client"

import { useState } from "react";

// A little component that throws an error on purpose so we can
// test that the error boundary actually catches it.
function BuggyComponent() {
    const [shouldCrash, setShouldCrash] = useState(false);

    if (shouldCrash) {
        throw new Error("I crashed on purpose!");
    }

    return (
        <div className="my-4 text-center">
            <button
                onClick={() => setShouldCrash(true)}
                className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
            >
                Click to crash
            </button>
        </div>
    );
}

export default BuggyComponent;
