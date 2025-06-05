async function handleEvent(advertisers, currentEvent, currentURL) {
let currentDownloadPath = currentURL.pathname.startsWith('/download/'),
currentStreamPath = currentURL.pathname.startsWith('/stream/'),
HTMLBody = '',
HTMLHead = '',
parseHTTP = {
body: '',
header: {
allow: 'GET, HEAD',
'content-type': 'text/html; charset=utf-8',
'referrer-policy': 'no-referrer',
'retry-after': '60',
'x-content-type-options': 'nosniff',
'x-download-options': 'noopen',
'x-robots-tag': 'nofollow, noindex'
},
status: 200
},
titlePage = 'CupVideo',
userAgent = currentEvent.request.headers.get('user-agent')
if (
!['-Google', 'Google-', 'Google'].some(
(value) =>
value.endsWith(userAgent) ||
value.includes(userAgent) ||
value.startsWith(userAgent)
) &&
(currentDownloadPath || currentStreamPath)
) {
const currentVideoPath = currentURL.pathname.split('/', 4).filter(Boolean)
if (currentVideoPath.length === 3) {
try {
var decodeVideoPath = [
atob(atob(currentVideoPath[1])),
atob(atob(currentVideoPath[2]))
]
} catch {
decodeVideoPath = []
} finally {
if (decodeVideoPath.length === 2) {
try {
var videoLinkCache = await fetch(
'https://api.wajibtahu.biz.id/client/' +
decodeVideoPath[0] +
'/file/' +
decodeVideoPath[1], {
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
videoLinkCache = null
} finally {
if (
videoLinkCache?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var videoLinkCacheResponse = await videoLinkCache.json()
} catch {
videoLinkCacheResponse = ''
} finally {
if (videoLinkCacheResponse[0]) {
if (currentDownloadPath) {
HTMLHead +=
'<link as="style" crossorigin="anonymous" href="https://cdnjs-staging.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" rel="preload" /> <link crossorigin="anonymous" href="https://cdnjs-staging.cloudflare.com" rel="preconnect" /> <link crossorigin="anonymous" href="https://cdnjs-staging.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet" /> <link href="https://cdnjs-staging.cloudflare.com" rel="dns-prefetch" />'
HTMLBody +=
'<nav class="navbar navbar-dark text-bg-dark"> <div class="container-fluid"> <a class="navbar-brand" href="/">Home</a> </div> </nav> <div class="container-fluid mb-3 mt-3"> <body> <div class="card mb-3"> <div class="card-header">Donate</div> <div class="card-body"> <img class="border d-block img-fluid mb-3 mx-auto p-3 shadow-lg" hidden onerror="this.onerror = null; this.remove()" onload="this.removeAttribute(\'hidden\')" src="https://lh3.googleusercontent.com/-3Qz-Icc9LhU/ZbHiUWIvHQI/AAAAAABBswE/lAGDHf8ejJEV2V1Eq3wuqfgdyX9D4mFogCNcBGAsYHQ/" /> <a class="btn d-grid gap-2 text-bg-warning" href="https://danaindonesia.app.link/leVPoM1tUDb">Via DANA</a> <img class="border d-block img-fluid mt-3 mx-auto p-3 shadow-lg" hidden onerror="this.onerror = null; this.remove()" onload="this.removeAttribute(\'hidden\')" src="https://lh3.googleusercontent.com/-U_KPd7qepKY/ZbHiBhWtaFI/AAAAAABBsv8/94Cmq6kSpiU1NiCFAqYm82O8HOp9Y00sgCNcBGAsYHQ/" /> <a class="btn d-grid gap-2 mt-3 text-bg-warning" href="https://shopee.co.id/universal-link/wallet/qr?qr_sn=00017ada4e399fa620b3">Via ShopeePay</a> </div> </div>'
if (advertisers) {
HTMLBody +=
' <ins class="adsbygoogle m-3 p-0" data-ad-client="ca-pub-' +
advertisers.publisher +
'" data-ad-format="auto" data-ad-slot="' +
advertisers.slot[0] +
'" data-full-width-responsive="true" style="display:block"> </ins> <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>'
}
HTMLBody += ' <div class="d-grid gap-2">'
titlePage += ' - Download'
for (const videoListIteration of videoLinkCacheResponse) {
HTMLBody +=
' <a class="btn text-bg-success" href="' +
videoListIteration.link +
'">Download Video ' +
videoListIteration.resolution +
'</a>'
}
HTMLBody +=
' <a class="btn text-bg-primary" href="/stream/' +
currentVideoPath[1] +
'/' +
currentVideoPath[2] +
'">Stream Video</a> </div>'
if (advertisers) {
HTMLBody +=
' <ins class="adsbygoogle m-3 p-0" data-ad-client="ca-pub-' +
advertisers.publisher +
'" data-ad-format="autorelaxed" data-ad-slot="' +
advertisers.slot[1] +
'" data-matched-content-columns-num="3" data-matched-content-rows-num="3" data-matched-content-ui-type="image_stacked" style="display:block"> </ins> <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>'
}
HTMLBody += ' </div>'
} else {
HTMLHead +=
'<link crossorigin="anonymous" href="https://cdn.jwplayer.com" rel="preconnect" /> <link crossorigin="anonymous" href="https://developer.android.com" rel="preconnect" /> <link href="https://cdn.jwplayer.com" rel="dns-prefetch" /> <link href="https://developer.android.com" rel="dns-prefetch" /> <script src="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"> </script> <style>body,html{padding:0;margin:0;width:100%!important;height:100%!important;background-color:#000;}#player{width:100%!important;height:100%!important;background-color:#000;}</style>'
titlePage += ' - Stream'
let parseVideoList = []
for (const videoListIteration of videoLinkCacheResponse) {
parseVideoList.push({
file: videoListIteration.link,
label: videoListIteration.resolution,
type: videoListIteration.type
})
}
HTMLBody +=
'<div hidden id="player"> </div> <script>let player=jwplayer("player").setup({autostart:!0,doNotSaveCookies:!0,horizontalVolumeSlider:!0,pipIcon:"disabled",playbackRateControls:!0,preload:"none",sources:' +
JSON.stringify(parseVideoList) +
',volume:100});player.addButton("https://lh3.googleusercontent.com/v0UW49SrkxIzfRRhYArIJvP456-QeKT9-1Yxk19gwJESPidGAnJS7n7_sHZe81NpX_E=s128-rw","Donate Via DANA",(function(){window.open("https://danaindonesia.app.link/leVPoM1tUDb")}),"donate via dana");player.addButton("https://lh3.googleusercontent.com/e-XzPln3c_xDVW27yWcBavmYC4HYZHJSlILeVbKy2lqG5OmvqDNES6hbyVTrY9revPs=s128-rw","Donate Via ShopeePay",(function(){window.open("https://shopee.co.id/universal-link/wallet/qr?qr_sn=00017ada4e399fa620b3")}),"donate via shopeepay");player.addButton("https://developer.android.com/static/images/spot-icons/tools-update.svg","Download Video",(function(){window.open(window.location.href.replace("stream","download"))}),"download");</script>'
}
} else {
parseHTTP.header['content-type'] = 'text/plain'
parseHTTP.status = 403
}
}
} else {
parseHTTP.header['content-type'] = 'text/plain'
parseHTTP.status = 503
}
}
} else {
parseHTTP.header['content-type'] = 'text/plain'
parseHTTP.status = 400
}
}
} else {
parseHTTP.header['content-type'] = 'text/plain'
parseHTTP.status = 400
}
} else {
const currentFileLinkQuery = currentURL.searchParams.get('link'),
uploader = [
[
'SAPISIDHASH 1742644271_f139a67ab124a02779be20c981aaca581ecbbe73_u SAPISID1PHASH 1742644271_f139a67ab124a02779be20c981aaca581ecbbe73_u SAPISID3PHASH 1742644271_f139a67ab124a02779be20c981aaca581ecbbe73_u',
'NID=522=wY5voTW_9cieWGEPsqCcqr1Kcjq2NBeSK6m3PU_Ki_MFezGLB5HoHer-ezk72V2qhNNNK3lft6eySokLo9JY6FPMdCP_Ou1o1lwSdD6YwpG7icRM9BGC0-_uqu6XVmGiITdpZGp2_rzlozYBKruuwFQLgktBOYsZDY6FZ8JTLbIbOB4X-UHJ5n74ZQ0jXCKAU2PahriYxkK59hrJlRVJgKcFcw2hDd8bloNzO37lkRNFa0H0DioJW9gfqwZwV_DkLhwd9N6yca5Ps4blRE4dnjQFlLdS3XaY9s6b5bdkaj5IGYYBcHAI0hrR-XFURYTEXVQtmpiVwneUIqEgCVhxT23UKkyw-zWMaoXUq78-s13aJYFdqMwLy-AFfLuduJTsd6p3YNFUkopF-UYx0ajX52Ma3DHPHu0QAAUKQYbv-rrCHw1KH8yG3G-aMgVNCsBNPqMiK1sUh9pfxoluRLFE1YLk2q_wm7UX6s-laYRJjq-bh3i9yGYaVPOquRArNOweBo4qNBX_o2qLrszspahTCa9aIUvFL6_q9UISkm2oei6reSLmrzZTMFxxNWxhwMSHDAKAONc_1SMM5fB9RidWNiH8utI2iGyQ9yU5_zYJFqcgu0kFKFuadSVPY4TL8fDqythAB4GGQCkmXwM; SID=g.a000vAgcIfR1JhkE-3aX-qz4Ka1fQ-7gVNZIr4f7LA61ORz5cmq7-OXaKZNpZPOGCVdvgthpuwACgYKAaUSARYSFQHGX2MisPqBmmdiqCP4SdkFxiEfPRoVAUF8yKoMTECQY6zujtRjxHVIOoX00076; __Secure-1PSID=g.a000vAgcIfR1JhkE-3aX-qz4Ka1fQ-7gVNZIr4f7LA61ORz5cmq7VubbMqo_px3bqFrsDwV9hwACgYKAX4SARYSFQHGX2MiuEye0-q3N39eso-Fpeo0jBoVAUF8yKpawyKVx_qQ2Cc8PASGFMZD0076; __Secure-3PSID=g.a000vAgcIfR1JhkE-3aX-qz4Ka1fQ-7gVNZIr4f7LA61ORz5cmq7unV8bwplPmbxu57tkQWR9QACgYKATISARYSFQHGX2Mi1luQHPvxbbexvbfTFhuZQxoVAUF8yKoZDhmbEO7wWA2iqgwaE-510076; HSID=ABk56iWseuNcnx5s9; SSID=AutbOVRcQ9gCUucbl; APISID=hkjvHWVDm1C_kqFr/ADf-bsTu8SC9O1jGn; SAPISID=B51w7GpJ9iptZhi9/A8DUCc_hZcyShQWDz; __Secure-1PAPISID=B51w7GpJ9iptZhi9/A8DUCc_hZcyShQWDz; __Secure-3PAPISID=B51w7GpJ9iptZhi9/A8DUCc_hZcyShQWDz; SIDCC=AKEyXzV2fVkV0wznVLnWA1VDBe9Uc6AK15D0CKD6hUH0BS1Nb3AbmlUHbehKRqdHOku8iTP6eA; __Secure-1PSIDCC=AKEyXzV_i60XQgJWKoaJJsSGigy-rVKf-uZZM6a2G7Mn3uYsXyBHwFtckuUjd-W2ZW_Tkatgrw; __Secure-3PSIDCC=AKEyXzXnqKBHJj2jlkM2VVMX65g0AP9r65eC1Q0OiV_qplzsnw3_18wMq-bUvsRAWMuPXLjvgg',
'cecep@pkbmlaatakhzan.xyz'
]
]
titlePage = 'Convert Any Video Link To Google Drive Link'
if (currentFileLinkQuery) {
let currentFileBody = null,
currentFileExistResult = [],
currentFileSearch =
'name%20contains%20%27%22' + currentFileLinkQuery + '%22%27',
currentFileSize = null,
currentFileType = null
try {
var videoSourceLinkCheck = await fetch(currentFileLinkQuery, {
headers: {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'follow',
signal: AbortSignal.timeout(10000)
})
} catch {
videoSourceLinkCheck = null
} finally {
currentFileType = videoSourceLinkCheck.headers.get('content-type')
if (videoSourceLinkCheck?.ok && currentFileType?.startsWith('video/')) {
currentFileSize = videoSourceLinkCheck.headers.get('content-length')
}
currentFileSearch +=
'%20and%20name%20contains%20%27%22' +
currentFileSize +
'%22%27%20and%20name%20contains%20%27%22' +
currentFileType +
'%22%27%20or%20name%20contains%20%27%22' +
btoa(currentFileLinkQuery) +
'%22%27'
}
try {
var currentFileExist = await fetch(
'https://clients6.google.com/drive/v3/files?corpora=allDrives&fields=files(hasThumbnail%2Cid%2Cmd5Checksum%2CmimeType%2Cname%2Cowners(emailAddress)%2Csha1Checksum%2Csha256Checksum%2Csize%2CvideoMediaMetadata)&includeItemsFromAllDrives=true&key=AIzaSyDVQw45DwoYh632gvsP5vPDqEKvb-Ywnb8&orderBy=modifiedByMeTime%20desc&pageSize=10&q=' +
currentFileSearch +
'%20and%20mimeType%20contains%20%27video%2F%27&supportsAllDrives=true', {
headers: {
'accept-encoding': 'gzip',
authorization: uploader[0][0],
cookie: uploader[0][1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(10000)
}
)
} catch {
currentFileExist = null
} finally {
if (
currentFileExist?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var currentFileExistResponse = await currentFileExist.json()
} catch {
currentFileExistResponse = ''
} finally {
if (Array.isArray(currentFileExistResponse.files)) {
currentFileExistResult = currentFileExistResponse.files.filter(
(value) =>
value?.id &&
value.name &&
value.name.includes('"' + videoSourceLinkCheck.url + '"') &&
value.name.includes('"' + currentFileSize + '"') &&
currentFileType
)
if (!currentFileExistResult[0]) {
if (parseInt(currentFileSize) <= 104857600) {
currentFileBody = await videoSourceLinkCheck.blob()
}
}
}
}
}
}
if (currentFileExistResult[0]?.id) {
const currentFileCopy = currentFileExistResponse.files.filter(
(value) => value?.id && value.name === btoa(currentFileLinkQuery)
)
if (currentFileCopy[0]?.id) {
HTMLBody +=
'<p> <label>Download link:</label> <input readonly="readonly" size="30" value="https://drive.usercontent.google.com/download?id=' +
currentFileCopy[0].id +
'" /> <a href="https://drive.usercontent.google.com/download?id=' +
currentFileCopy[0].id +
'">Open link</a> </p> <label>Stream link:</label> <input readonly="readonly" size="30" value="https://docs.google.com/file/d/' +
currentFileCopy[0].id +
'/preview" /> <a href="https://docs.google.com/file/d/' +
currentFileCopy[0].id +
'/preview">Open link</a>'
} else {
HTMLBody += '<h1>200 OK</h1>'
}
} else {
if (currentFileBody) {
try {
var uploadTask = await fetch(
'https://clients6.google.com/upload/drive/v3/files?uploadType=resumable&key=AIzaSyD_InbmSFufIEps5UAt2NmB_3LvBH3Sz_8', {
body: '{"name":"{\\"link\\":\\"' +
videoSourceLinkCheck.url +
'\\",\\"size\\":\\"' +
currentFileSize +
'\\",\\"type\\":\\"' +
currentFileType +
'\\"}"}',
headers: {
authorization: uploader[0][0],
'content-type': 'application/json',
cookie: uploader[0][1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'POST',
redirect: 'manual',
signal: AbortSignal.timeout(10000)
}
)
} catch {
uploadTask = null
} finally {
if (uploadTask) {
const uploadSession = uploadTask.headers.get(
'X-GUploader-UploadID'
)
if (uploadSession) {
try {
var uploadFile = await fetch(
'https://clients6.google.com/upload/drive/v3/files?fields=id&uploadType=resumable&key=AIzaSyD_InbmSFufIEps5UAt2NmB_3LvBH3Sz_8&upload_id=' +
uploadSession, {
body: currentFileBody,
headers: {
authorization: uploader[0][0],
cookie: uploader[0][1],
referer: 'https://drive.google.com/',
'user-agent': 'gzip(gfe)'
},
method: 'PUT',
redirect: 'manual',
signal: AbortSignal.timeout(10000)
}
)
} catch {
uploadFile = null
} finally {
if (uploadFile) {
try {
var uploadFileResponse = JSON.parse(
await uploadFile.text()
)
} catch {
uploadFileResponse = ''
} finally {
if (uploadFileResponse.id) {
try {
var copyCurrentSource = await fetch(
'https://clients6.google.com/drive/v3/files/' +
uploadFileResponse.id +
'/copy?fields=id%2Cmd5Checksum%2CmimeType%2Cowners(emailAddress)%2Csha1Checksum%2Csha256Checksum%2Csize%2CvideoMediaMetadata&key=AIzaSyDVQw45DwoYh632gvsP5vPDqEKvb-Ywnb8&supportsAllDrives=true', {
body: '{"name":"' +
btoa(currentFileLinkQuery) +
'"}',
headers: {
'accept-encoding': 'gzip',
authorization: uploader[0][0],
'content-type': 'application/json',
cookie: uploader[0][1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'POST',
redirect: 'manual',
signal: AbortSignal.timeout(10000)
}
)
} catch {
copyCurrentSource = null
} finally {
if (
copyCurrentSource?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var copyCurrentSourceResponse =
await copyCurrentSource.json()
} catch {
copyCurrentSourceResponse = ''
} finally {
if (copyCurrentSourceResponse.id) {
HTMLBody +=
'<p> <label>Download link:</label> <input readonly="readonly" size="30" value="https://drive.usercontent.google.com/download?id=' +
copyCurrentSourceResponse.id +
'" /> <a href="https://drive.usercontent.google.com/download?id=' +
copyCurrentSourceResponse.id +
'">Open link</a> </p> <label>Stream link:</label> <input readonly="readonly" size="30" value="https://docs.google.com/file/d/' +
copyCurrentSourceResponse.id +
'/preview" /> <a href="https://docs.google.com/file/d/' +
copyCurrentSourceResponse.id +
'/preview">Open link</a>'
} else {
HTMLBody += '<h1>200 OK</h1>'
}
}
}
}
} else {
HTMLBody += '<h1>404 Not Found</h1>'
parseHTTP.status = 404
}
}
} else {
HTMLBody += '<h1>403 Forbidden</h1>'
parseHTTP.status = 403
}
}
} else {
HTMLBody += '<h1>501 Not Implemented</h1>'
parseHTTP.status = 501
}
} else {
HTMLBody += '<h1>501 Not Implemented</h1>'
parseHTTP.status = 501
}
}
} else {
HTMLBody += '<h1>404 Not Found</h1>'
parseHTTP.status = 404
}
}
} else {
HTMLBody +=
'<h1>Convert Any Video Link To Google Drive Link</h1> <p>You only need to put the video link. The upload process is much faster than directly uploading the actual video. Of course, you won\'t waste a lot of time and internet quota, because you have to download and upload it. No need to worry about slow internet speeds or broken downloads.</p> <form method="get"> <fieldset> <label>Enter video link:</label> <input maxlength="100" minlength="25" name="link" placeholder="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" required type="url" /> <input type="submit" value="Convert" /> <p> <label>Example video link:</label> <input readonly="readonly" size="30" value="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" /> </p> <ul> <li>You need to put a <b>link to the actual video</b> in that column and <i>not just a link to the web page</i> where the video is located.</li> <li>You can upload video up to <i>100 MB</i> (104857600 bytes) remotely to our servers.</li> <li> <b>You have to make sure your video link has the correct extension without active damage.</b> </li> </ul> </fieldset> </form>'
}
}
if (parseHTTP.header['content-type'] === 'text/html; charset=utf-8') {
if (advertisers) {
HTMLHead +=
' <link crossorigin="anonymous" href="https://pagead2.googlesyndication.com" rel="preconnect" /> <link href="https://pagead2.googlesyndication.com" rel="dns-prefetch" /> <script async crossorigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' +
advertisers.publisher +
'"> </script> <style>ins.adsbygoogle[data-ad-status="unfilled"]{display:none!important;}</style>'
}
if (!currentStreamPath) {
HTMLHead += ' <meta content="10" http-equiv="refresh" />'
}
parseHTTP.body =
'<!doctype html> <html class="notranslate" lang="en-US" translate="no"> <head> <link crossorigin="anonymous" href="https://lh3.googleusercontent.com" rel="preconnect" /> <link href="https://lh3.googleusercontent.com" rel="dns-prefetch" /> <link crossorigin="anonymous" href="https://drive-thirdparty.googleusercontent.com" rel="preconnect" /> <link href="https://drive-thirdparty.googleusercontent.com" rel="dns-prefetch" /> <link href="https://drive-thirdparty.googleusercontent.com/16/type/video" rel="icon" type="image/png" /> <meta charset="utf-8" /> <meta content="The service exceeds the download and streaming quota of the video." name="description"> <meta content="height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover, width=device-width" name="viewport" /> <meta content="nofollow, noindex" name="robots" /> <meta content="notranslate" name="google" /> ' +
HTMLHead +
' <title>' +
titlePage +
'</title> </head> ' +
HTMLBody +
' </body> </html>'
}
if (currentDownloadPath) {
parseHTTP.header['x-frame-options'] = 'DENY'
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
const advertisers = [{
domain: ['armob.biz.id', 'www.armob.biz.id'],
publisher: '4492104810534221',
slot: ['2672619891', '2581621563']
},
{
domain: ['wajibtahu.my.id', 'www.wajibtahu.my.id'],
publisher: '3843048698407110',
slot: ['6399413500', '7373956894']
}
].find((value) =>
value.domain.some((element) => element === currentURL.hostname)
)
if (currentURL.href === currentURL.origin + '/favicon.ico') {
currentEvent.respondWith(
new Response(null, {
status: 204
})
)
} else if (currentURL.href === currentURL.origin + '/robots.txt') {
let crawler = 'User-agent: *\nDisallow: /'
if (advertisers) {
crawler +=
'\nAllow: /ads.txt\n\nUser-agent: Mediapartners-Google\nAllow: /'
}
currentEvent.respondWith(
new Response(crawler, {
headers: {
'content-type': 'text/plain'
},
status: 200
})
)
} else if (
advertisers &&
currentURL.href === currentURL.origin + '/ads.txt'
) {
currentEvent.respondWith(
new Response(
'google.com, pub-' +
advertisers.publisher +
', DIRECT, f08c47fec0942fa0', {
headers: {
'content-type': 'text/plain'
},
status: 200
}
)
)
} else {
currentEvent.respondWith(
handleEvent(advertisers, currentEvent, currentURL).catch((error) => {
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
