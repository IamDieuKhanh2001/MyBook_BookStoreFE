export function truncateText(str: string = '', lengthMax: number = 20) {
    return (str.length > lengthMax) ? str.slice(0, lengthMax - 1) + '...' : str;
};