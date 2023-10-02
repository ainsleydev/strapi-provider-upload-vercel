"use strict";
var blob_1 = require("@vercel/blob");
module.exports = {
    init: function (options) {
        return {
            /**
             * Uploads a file to Vercel's blob storage.
             *
             * @param file
             * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
             */
            uploadVercelBlob: function (file) {
                return new Promise(function (resolve, reject) {
                    var _a;
                    (0, blob_1.put)("".concat(file.hash).concat(file.ext), file.buffer || file.stream, {
                        access: 'public',
                        contentType: file.mime,
                        token: options.token,
                        cacheControlMaxAge: (_a = options.cacheControlMaxAge) !== null && _a !== void 0 ? _a : 31536000, // Year in seconds.
                    })
                        .then(function (result) {
                        file.url = result.url;
                        file.previewUrl = result.url;
                        file.mime = result.contentType;
                        file.path = result.pathname;
                        resolve();
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            },
            /**
             *	Upload a file buffer to Vercel.
             *
             * @param file
             */
            upload: function (file) {
                if (!file.buffer) {
                    return Promise.reject(new Error('Missing file buffer'));
                }
                return this.uploadVercelBlob(file);
            },
            /**
             * Upload a file stream to vercel.
             *
             * @param file
             */
            uploadStream: function (file) {
                if (!file.stream) {
                    return Promise.reject(new Error('Missing file stream'));
                }
                return this.uploadVercelBlob(file);
            },
            /**
             * Deletes the file from the Vercel blob store.
             *
             * @param file
             */
            delete: function (file) {
                return (0, blob_1.del)(file.url);
            },
            /**
             * Ensure the file does not exceed the Vercel upload limit.
             *
             * @param file
             * @param sizeLimit
             * @remarks This requires a bit more work to implement, but it allows you to upload files up to 500 MB.
             */
            checkFileSize: function (file) {
                var maxUploadSizeInMB = 500, kBytesToBytes = function (kBytes) { return kBytes * 1000; };
                if (kBytesToBytes(file.size) > maxUploadSizeInMB) {
                    throw new Error("".concat(file.name, " exceeds size limit of ").concat(maxUploadSizeInMB, "'}."));
                }
            },
            /**
             * Private is not currently supported by Vercel but is planned.
             *
             * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
             */
            getSignedUrl: function () {
                // (optional)
                // Generate a signed URL for the given file.
                // The signed URL allows secure access to the file.
                // Only Content Manager assets will be signed.
                // Returns an object {url: string}.
            },
            /**
             * Private is not currently supported by Vercel but is planned.
             *
             * @see: https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
             */
            isPrivate: function () {
                // (optional)
                // if it is private, file urls will be signed
                // Returns a boolean
            },
        };
    },
};
//# sourceMappingURL=index.js.map