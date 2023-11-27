export function base64StringToBlob(base64String: string, fileName = 'unname') {
    try {
        const mimeTypeMatch = base64String.match(/^data:image\/([a-zA-Z+]+);base64,/);
        if (!mimeTypeMatch) {
            throw new Error('Invalid base64 string format');
        }
        const mimeType = mimeTypeMatch[1];
        const byteString = atob(base64String.split(',')[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const intArray = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
            intArray[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer], { type: `image/${mimeType}` });
        return blob;
    } catch (error) {
        throw new Error('Invalid base64 string format');
    }
}