/// <reference types="node" />
/// <reference types="node" />
import { ReadStream } from 'fs';
interface Options {
	token: string;
	addRandomSuffix?: boolean;
	cacheControlMaxAge?: number;
}
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
		 *
		 * @param file
		 */
		uploadVercelBlob(file: File): Promise<void>;
		/**
		 *
		 * @param file
		 */
		upload(file: File): Promise<void>;
		/**
		 *
		 * @param file
		 */
		uploadStream(file: File): Promise<void>;
		/**
		 *
		 * @param file
		 */
		delete(file: File): Promise<void>;
		checkFileSize(
			file: File,
			{
				sizeLimit,
			}: {
				sizeLimit: any;
			},
		): void;
		/**
		 * Private is not currently supported by Vercel but is planned.
		 * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
		 */
		getSignedUrl(file: File): void;
		/**
		 * Private is not currently supported by Vercel but is planned.
		 * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
		 */
		isPrivate(): void;
	};
};
export = _default;
