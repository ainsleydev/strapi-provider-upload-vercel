<p align="center">
  <img src="./res/symbol.png" height="86">
</p>

<p align="center">
    <a href="https://ainsley.dev">
        <h3 align="center">ainsley.dev</h3>
    </a>
</p>

<div align="center">

[![Twitter Handle](https://img.shields.io/twitter/follow/ainsleydev)](https://twitter.com/ainsleydev)

</div>

## Strapi Vercel Blob Provider

A provider for Strapi that uploads media to Vercel's Blob store.

## Install

`npm install strapi-provider-upload-vercel`

## Configuration

The plugin settings mimic the SDK parameters defined in
their [documentation](https://vercel.com/docs/storage/vercel-blob/using-blob-sdk)

-   `token` A string specifying the token to use when making requests. It defaults to `process.env.BLOB_READ_WRITE_TOKEN`
    when deployed on Vercel as explained in Read-write token. You can also pass a client token created with
    the `generateClientTokenFromReadWriteToken` method
-   `addRandomSuffix` A boolean specifying whether to add a random suffix to the pathname. It defaults to `true`.
-   `cacheControlMaxAge` A number in seconds to configure the edge and browser cache. Defaults to one year. See the caching documentation for more details.

### Provider Configuration

`./config/plugins.js` or `./config/plugins.ts` for TypeScript projects:

```typescript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-vercel',
      providerOptions: {
        token: env('VERCEL_BLOB_TOKEN'),
        addRandomSuffix: true,
        cacheControlMaxAge: 31536000, // Year in seconds
      },
    },
  },
});
```

## Security Middleware Configuration

Due to the default settings in the Strapi Security Middleware you will need to modify the `contentSecurityPolicy`
settings to properly see thumbnail previews in the Media Library. You should replace `strapi::security` string with the
object below instead as explained in the middleware configuration documentation.

```typescript
export default [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://yourbucketname.public.blob.vercel-storage.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://yourbucketname.public.blob.vercel-storage.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
```

## Open Source

ainsley.dev permits the use of any code found within the repository for use with external projects.

## Trademark

ainsley.dev and the ainsley.dev logo are either registered trademarks or trademarks of ainsley.dev LTD in the United
Kingdom and/or other countries. All other trademarks are the property of their respective owners.
