"use client"

import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client/react";
import { ErrorBoundary } from "react-error-boundary";
import { apolloClient } from "@/lib/apollo-client";
import { logError } from "@/lib/logger";
import ErrorFallback from "@/components/11_Error_Boundary_+_Logging/ErrorFallback";

export default function Providers({children}: {children: ReactNode}) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={(error) => logError("Error caught by the app error boundary", error)}
        >
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </ApolloProvider>
        </ErrorBoundary>
    );
}
