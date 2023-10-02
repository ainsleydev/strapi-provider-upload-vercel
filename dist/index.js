'use strict';
const blob_1 = require('@vercel/blob');
module.exports = {
	init(options) {
		return {
			/**
			 *
			 * @param file
			 */
			uploadVercelBlob(file) {
				return new Promise((resolve, reject) => {
					(0, blob_1.put)(`${file.hash}${file.ext}`, file.buffer || file.stream, {
						access: 'public',
						contentType: file.mime,
						token: options.token,
						cacheControlMaxAge: options.cacheControlMaxAge,
					})
						.then((result) => {
							file.url = result.url;
							file.previewUrl = result.url;
							file.mime = result.contentType;
							file.path = result.pathname;
							console.log(file);
							resolve();
						})
						.catch((err) => {
							reject(err);
						});
				});
			},
			/**
			 *
			 * @param file
			 */
			upload(file) {
				if (!file.buffer) {
					return Promise.reject(new Error('Missing file buffer'));
				}
				return this.uploadVercelBlob(file);
			},
			/**
			 *
			 * @param file
			 */
			uploadStream(file) {
				if (!file.stream) {
					return Promise.reject(new Error('Missing file stream'));
				}
				return this.uploadVercelBlob(file);
			},
			/**
			 *
			 * @param file
			 */
			delete(file) {
				return (0, blob_1.del)(file.url).catch((err) => {
					console.log(err, 'in');
					return Promise.reject(err);
				});
			},
			checkFileSize(file, { sizeLimit }) {
				// (optional)
				// implement your own file size limit logic
			},
			/**
			 * Private is not currently supported by Vercel but is planned.
			 * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
			 */
			getSignedUrl(file) {
				// (optional)
				// Generate a signed URL for the given file.
				// The signed URL allows secure access to the file.
				// Only Content Manager assets will be signed.
				// Returns an object {url: string}.
			},
			/**
			 * Private is not currently supported by Vercel but is planned.
			 * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
			 */
			isPrivate() {
				// (optional)
				// if it is private, file urls will be signed
				// Returns a boolean
			},
		};
	},
};
//# sourceMappingURL=index.js.map
