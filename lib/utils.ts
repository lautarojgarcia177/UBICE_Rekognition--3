import { File } from '../interfaces';

export function useRegex(input: string): boolean {
    let regex = /^[0-9]+$/i;
    return regex.test(input);
}

export const toBase64: (file: any) => Promise<any> = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export function filterFilesBySupportedImageExtension(files: File[]) {
    return files.filter(
        (file) =>
            file.name.endsWith(".JPG") ||
            file.name.endsWith(".PNG") ||
            file.name.endsWith(".JPEG") ||
            file.name.endsWith(".jpg") ||
            file.name.endsWith(".png") ||
            file.name.endsWith(".jpeg")
    );
}