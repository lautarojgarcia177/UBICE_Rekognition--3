/**
 * when done, ensure to call endProcess() to stop the process.
 */

import exiftool from 'node-exiftool';
const ep = new exiftool.ExiftoolProcess();

class ExifTool {
    isOpen = false;

    async readMetadata(imageFileName) {
        if (!this.isOpen) {
            await ep.open();
            this.isOpen = true;
        }
        await ep.readMetadata(imageFileName, ['-File:all']);
    }

    async addKeywords(imageFileName, keywords) {
        if (!this.isOpen) {
            await ep.open();
            this.isOpen = true;
        };
        await ep.writeMetadata(imageFileName, {
            'Keywords+': [...keywords],
        }, ['overwrite_original']);
    }

    async endProcess() {
        if (this.isOpen) {
            await ep.close();
            this.isOpen = false;
        }
    }
}

const exiftoolInstance = new ExifTool();

export { exiftoolInstance } ;