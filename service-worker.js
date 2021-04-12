import { skipWaiting, clientsClaim } from 'workbox-core'
import { ExpirationPlugin } from 'workbox-expiration'
import {
  NetworkFirst,
  CacheFirst,
  StaleWhileRevalidate,
} from 'workbox-strategies'
import {
  registerRoute,
  setDefaultHandler,
  setCatchHandler,
} from 'workbox-routing'
import {
  matchPrecache,
  precacheAndRoute,
  cleanupOutdatedCaches,
} from 'workbox-precaching'

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { RangeRequestsPlugin } from 'workbox-range-requests'

skipWaiting()
clientsClaim()

// must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point
const WB_MANIFEST = self.__WB_MANIFEST
// Precache fallback route and image
WB_MANIFEST.push({
  url: '/offline',
  revision: '1234567890',
})
precacheAndRoute(WB_MANIFEST)

cleanupOutdatedCaches()

// Start URL
registerRoute(
  '/',
  new NetworkFirst({
    cacheName: 'start-url',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// Self-hosted Fonts
registerRoute(
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.startsWith('/fonts/'),
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// Images Caches
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'static-image-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// Media Files
registerRoute(
  ({ url }) => url.pathname.endsWith('.mp3'),
  new StaleWhileRevalidate({
    cacheName: 'static-audio-assets',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new RangeRequestsPlugin(),
    ],
  }),
  'GET'
)

// JS Files
registerRoute(
  ({ request }) => request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// CSS Files
registerRoute(
  ({ request }) => request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// JSON, XML, CSV FILES
registerRoute(
  /\.(?:json|xml|csv)$/i,
  new NetworkFirst({
    cacheName: 'static-data-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// Others
registerRoute(
  /.*/i,
  new NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
)

// following lines gives you control of the offline fallback strategies
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks

const defaultStategy = new StaleWhileRevalidate({
  cacheName: 'default',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxEntries: 128,
      maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      purgeOnQuotaError: true,
    }),
  ],
})

// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler((args) => {
  if (args.event.request.method === 'GET') {
    return defaultStategy
  }
  return fetch(args.event.request)
})

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(async ({ event }) => {
  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  if (event.request.destination === 'document') {
    return matchPrecache('/offline')
  }
  // If we don't have a fallback, just return an error response.
  return Response.error()
})
