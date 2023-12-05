export function convertMillisecondsToHours(ms: number) {
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    return hours
}

export function convertMillisecondsToMinutes(ms: number) {
    const minutes = Math.floor((ms / (1000 * 60)) % 60);

    return minutes
}

export function convertMillisecondsToSeconds(ms: number) {
    const seconds = Math.floor((ms / 1000) % 60);

    return seconds
}