/// <reference types="node" />
/// <reference types="node" />
import { ReadStream } from 'fs';
/**
 * Plugin options.
 */
interface Options {
    token: string;
    addRandomSuffix?: boolean;
    cacheControlMaxAge?: number;
}
/**
 * File from Strapi.
 */
interface File {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext?: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    path?: string;
    provider?: string;
    provider_metadata?: Record<string, unknown>;
    stream?: ReadStream;
    buffer?: Buffer;
}
declare const _default: {
    init(options: Options): {
        /**
         * Uploads a file to Vercel's blob storage.
         *
         * @param file
         * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
         */
        uploadVercelBlob(file: File): Promise<void>;
        /**
         *	Upload a file buffer to Vercel.
         *
         * @param file
         */
        upload(file: File): Promise<void>;
        /**
         * Upload a file stream to vercel.
         *
         * @param file
         */
        uploadStream(file: File): Promise<void>;
        /**
         * Deletes the file from the Vercel blob store.
         *
         * @param file
         */
        delete(file: File): Promise<void>;
        /**
         * Ensure the file does not exceed the Vercel upload limit.
         *
         * @param file
         * @param sizeLimit
         * @remarks This requires a bit more work to implement, but it allows you to upload files up to 500 MB.
         */
        checkFileSize(file: File): void;
        /**
         * Private is not currently supported by Vercel but is planned.
         *
         * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
         */
        getSignedUrl(): void;
        /**
         * Private is not currently supported by Vercel but is planned.
         *
         * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
         */
        isPrivate(): void;
    };
};
export = _default;
