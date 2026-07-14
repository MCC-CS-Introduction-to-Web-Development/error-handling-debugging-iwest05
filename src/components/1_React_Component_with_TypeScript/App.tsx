"use client";
import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import HeroSection from "./HeroSection";
import Header from "./Header";
import HelloWorld from "./HelloWorld";
import ErrorFallback from "@/components/11_Error_Boundary_+_Logging/ErrorFallback";
import BuggyComponent from "@/components/11_Error_Boundary_+_Logging/BuggyComponent";
import { logError } from "@/lib/logger";

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <HelloWorld name="Iain West" />

            {/* Wrapping just this section so if it crashes the rest of the page still works */}
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={(error) => logError("Error in the demo section", error)}
            >
                <BuggyComponent />
            </ErrorBoundary>
        </>
    );
}

export default App;
