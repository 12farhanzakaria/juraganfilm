async function handleEvent(currentURL) {
let parseHTTP = {
body: '{"status":404}',
header: {
allow: 'GET, HEAD',
'content-type': 'application/json',
'referrer-policy': 'no-referrer',
'x-content-type-options': 'nosniff',
'x-download-options': 'noopen',
'x-frame-options': 'DENY',
'x-robots-tag': 'nofollow, noindex',
'x-xss-protection': '1; mode=block'
},
status: 404
}
try {
var proxyRequest = await fetch(
currentURL.href.replace(
currentURL.hostname,
'proxy.googleapis.biz.id'
), {
headers: {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
proxyRequest = null
} finally {
if (
proxyRequest?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var proxyResponse = await proxyRequest.text()
} catch {
proxyResponse = ''
} finally {
if (proxyResponse) {
parseHTTP.body = proxyResponse
}
}
}
if (proxyRequest?.status) {
parseHTTP.status = proxyRequest.status
}
}
return new Response(parseHTTP.body, {
headers: parseHTTP.header,
status: parseHTTP.status
})
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
handleEvent(currentURL).catch((error) => {
let errorReport = ''
if (currentURL.hostname.endsWith('.dev')) {
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
