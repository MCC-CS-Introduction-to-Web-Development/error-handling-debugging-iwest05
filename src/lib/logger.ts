// simple logging service

export function logInfo(message: string) {
    console.log("INFO: " + message);
}

export function logWarning(message: string) {
    console.warn("WARNING: " + message);
}

export function logError(message: string, error?: any) {
    console.error("ERROR: " + message, error);

    // also send the error to the backend so we have a record of it
    fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message, error: String(error) }),
    });
}
