const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "index.html",
    "css/style.css",
    "js/app.js",
    "icons/logo.svg",
    "icons/pwa/1280x720.webp"
]

self.addEventListener("install", installEvent =>
{
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache =>
        {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent =>
{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>
        {
            return res || fetch(fetchEvent.request)
        })
    )
})