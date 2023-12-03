<p align="center">
  <img src="./res/symbol.png" height="86">
</p>

<p align="center">
    <a href="https://ainsley.dev">
        <h3 align="center">ainsley.dev</h3>
    </a>
</p>

<div align="center">

[![npm](https://img.shields.io/npm/v/strapi-provider-upload-vercel.svg?style=flat-shiny&logo=npm&color=white)](https://www.npmjs.com/package/strapi-provider-upload-vercel)
![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg?style=flat&logo=typescript)
[![ainsley.dev](https://img.shields.io/badge/-ainsley.dev-black?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5wEYDzUGL1b35AAABA1JREFUWMPtlttvFVUUxn977ZnZu+W0tLalqRovBAUvQag0xNQbpSIosSSIJC198YknJfHJxDf9A/DBJ0x8MbFACjVqvCASq6FYFLFBvJAaAomkFCmhHGpLO+PDzOmZzpn2nKP4pCs5ycmevb7vW99as/fA//FfD1XO5p1nzuA3NWJHx5T8cVkRBPHHQfRjd0tzyZhOOQIy27bAxET9zCuvvhY0r2kC/OiRABeAN4BL/4oDr9+3lGszPs7UVNfUE23v3Nj5koszR/8N4EXg3XJckFIFuCLUuU7GWNNtTg25cu4syJx0F+gGMuU4UJKAt1Yux1UKV6TVat1qs+OYwQESMwDQCjwKsOv4iZsnwGihwbiuEek2WjJGhMrvv0UujYKa08VFkQvuTXNgz6oVeCIo1CqrZYMRwTiaytERKn44kRQAsAFYDbBrsLgLRQU0GI919TXKiHQaUQ1GBCuCCQKqjg/MqInrM4lZrgc6A1CljHhRAZ4Ip65m77FaOmbJdehC5vzZr1RAf/T6x6NDwb3/uAVfP74GnwCjZasRuXuWXASj9XQme+3t6erqPcB0IvUuYCsUH8YFBRhRNBqvyYpsn0MeOnG6wvc/9x33MPBjSvp24Na/7cDP7Y/gKIURecZoeTBObkSwWg7UNjaOeFfGLgK9KRAPAM8Wc2FeAUaEWtddbEV2WBFtREXkCqvlghE5yOQkvucBHAR+T0BooAtYXLYDI5sewxWFJ/Kk1bI2UTlW5DMFp03+JPwJ+DQFai2wbiEXUgVUas0trmuslm4jUmGi/tuwDVmrpafBuNPVrs7N/wzQA2QTUJbwYLIlOxB0tOGJ4IhqsSJts+T54Rv0lBz1RFh9ZJA385fOAHAshaMNaAF4OcWFQgeUwhMlrlJdnqjaOLkR8Y2WvbWec9VIQeo4sJf8FZ2LmmgWJO1cmm8I7wc2a6XwosGL+v+rFfnYUYplh47Obo5dvZ8Av6TgbSZ8KxYWEGxZn/u7Dbg9t8HNnwF9S2qqzqVUn4vzQF/K+m3AC1A4jGlId0QC8l0BXKVGrahe//okNR99WZAUc6EXuJiC+zxw57wOxKp/DliRAvCFKDUkxS+YIeBwyvryCHuOC0kH6oBOCj/V/gTeA6aK0oefZj3ARGJdRdh1BQ7Eqm8HHk4B/Q7oB1B9acWFEWtDf5STjGbgqbgLcQcqCQ8NL5EUAPuBsRKqz8UVYB+F97QXcSyatSXoWJ8zvB04AFQlkoaBp4HhhaqPR1TdUsLjeVni8TjhVX0odCAkd4AdKeQAHxIwXEb1Odt+Az5IeVQVcTmhgDBWAhtTNl8G9qGAwKfU2N3SnJvi/RFGMjYCD8UFdACNKRsHgZMA6v0j5ZpAlPtNyvqSiJO/AKik60y0ALlUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTAxLTI0VDE1OjUzOjA2KzAwOjAwm5vntAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wMS0yNFQxNTo1MzowNiswMDowMOrGXwgAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=)](https://ainsley.dev)
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
-   `cacheControlMaxAge` A number in seconds to configure the edge and browser cache. Defaults to one year. See the
    caching documentation for more details.

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

[ainsley.dev](https://ainsley.dev) permits the use of any code found within the repository for use with external
projects.

## Trademark

ainsley.dev and the ainsley.dev logo are either registered trademarks or trademarks of ainsley.dev LTD in the United
Kingdom and/or other countries. All other trademarks are the property of their respective owners.
