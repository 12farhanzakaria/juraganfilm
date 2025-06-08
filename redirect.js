async function handleEvent(currentURL) {
return Response.redirect(
currentURL.href.replace(
currentURL.hostname,
'file.googleapis.biz.id'
) +
'/' +
Date.now(),
307
)
}
addEventListener('fetch', (currentEvent) => {
if (
currentEvent.request.method === 'HEAD' ||
currentEvent.request.method === 'GET'
) {
let currentURL = new URL(currentEvent.request.url)
if (currentURL.protocol === 'https:') {
if (currentURL.href === currentURL.origin + '/favicon.ico') {
currentEvent.respondWith(
new Response(null, {
status: 204
})
)
} else if (currentURL.href === currentURL.origin + '/robots.txt') {
currentEvent.respondWith(
new Response('User-agent: *\nDisallow: /', {
headers: {
'content-type': 'text/plain'
},
status: 200
})
)
} else {
currentEvent.respondWith(
handleEvent(currentURL).catch(async (error) => {
let errorReport = ''
if (currentURL.hostname.endsWith('.workers.dev')) {
errorReport = error.stack
}
return new Response(errorReport, {
status: 500
})
})
)
}
} else {
currentEvent.respondWith(
new Response('', {
status: 505
})
)
}
} else {
currentEvent.respondWith(
new Response('', {
status: 405
})
)
}
})