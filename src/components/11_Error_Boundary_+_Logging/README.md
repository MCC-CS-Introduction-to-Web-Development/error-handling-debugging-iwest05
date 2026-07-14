# Error Handling & Logging

This part of the project adds error boundaries and a logging service so the app
doesn't just show a blank white screen when a component crashes.

## What I used

- **react-error-boundary** library (installed with `npm install react-error-boundary`)
- A small logging service in `src/lib/logger.ts`

## How it works

React error boundaries catch errors that happen while a component is rendering.
Instead of writing my own class component, I used the `react-error-boundary`
library because it's the recommended way and it gives you a nice `<ErrorBoundary>`
component you can just wrap around things.

### 1. Wrapping the whole app

In `src/app/providers.tsx` the whole app is wrapped in an `<ErrorBoundary>`. If
anything crashes and no smaller boundary catches it, this one does so the user
still sees a friendly message.

### 2. Wrapping a major section

In `App.tsx` I also wrapped just the demo section in its own `<ErrorBoundary>`.
This is nice because if only that section breaks, the rest of the page keeps
working instead of the whole app going down.

### 3. The fallback UI

`ErrorFallback.tsx` is the component that gets shown when there's an error. It
shows a "Something went wrong" message, the error message, and a **Try again**
button. The button calls `resetErrorBoundary()` which tries to render the
component again.

### 4. Logging errors

The `<ErrorBoundary>` has an `onError` prop. Whenever it catches an error it
calls `logError()` from the logging service. `logError()` prints the error to
the console and also sends it to the `/api/logs` endpoint (a Next.js route
handler) so there's a record of it on the server.

## Testing it

`BuggyComponent.tsx` has a "Click to crash" button. When you click it the
component throws an error on purpose. The error boundary catches it, shows the
fallback UI, and logs the error. Clicking **Try again** brings the button back.
