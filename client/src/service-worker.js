/**
 * the workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requets and responds to
 * ser https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')

workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(/^https?.*/,
    workbox.strategies.networkFirst(),'GET')


// Esta es la regla stale while Revalidate
//workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/, workbox.strategies.staleWhileRevalidate(), 'GET')

//Este es el metodo cacheFirst guarda algo en especifico
// workbox.routing.registerRoute(/^https?:\/\/fonst.(?:googleapis|gstatic).com\/(.*)/,
//     workbox.strategies.cacheFirst({
//         cacheName: 'google-fonts-cache',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 324*60*60
//             })
//         ]
//     }), 'GET')

// Esta es la regla NetworkFirst, Modo offline muestra lo que este en cache


    // workbox.routing.registerRoute(/^https?:\/\/localhost:4000\/user\/.*/,
    //     workbox.strategies.staleWhileRevalidate(), 'GET')
    
    // workbox.routing.registerRoute(/^https?:\/\/localhost:4000\/api\/.*/,
    // workbox.strategies.staleWhileRevalidate(), 'GET')