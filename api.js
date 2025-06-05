async function handleEvent(currentEvent, currentURL) {
if (currentURL.pathname) {
const clientConfig = {
'0b2689012668f3d4609d4fdb704986e8': [
'1EguMBmW2-sSefQy8e9XxXRv7bI2hu_i8',
'wajibtahu.biz.id',
[
[
'17vlmcDj-oLguP8XHfxhS72MLcsGdvCzy',
'muhammad.yusuf.60302803@smartedu.papua.go.id'
]
]
]
},
usersManagement = [
[
[
'SAPISIDHASH 1747791395_d3cf0acbd8416001b0e9572102c9f4cd451741a0_u SAPISID1PHASH 1747791395_d3cf0acbd8416001b0e9572102c9f4cd451741a0_u SAPISID3PHASH 1747791395_d3cf0acbd8416001b0e9572102c9f4cd451741a0_u',
'NID=524=GIBZ3GN8vQj6h2-M8Ucdezm2hCHgJ5N_ejxK3U0kBAy07jbfbPZI8Sx7_uRHFLgslzzZ1BcLWbJRTwDFg0YyYvJtziuM7WquQzVbaz1XeKbUq4ty5OOBZI_XoGSWYIiaC2HKQIupZpF0jFR3db8LKSWlxpeEuw_aSQsFrTP-n7xppc5VbgWQqULIQd-W2_3LmVFfpvWVl1FueXpkNui97mrKhPh5YzpmZMOzVWC19PjKlBc5hbyEwfRgIGhg9VQxFITcscn1Q7wV0B1YQPaTZJxjdqkQFScUxr9uTQIzEsjFL201U2vuyrokYre_GrTcoC9Uxs4dxQeGBTLsJE3oF1F_R34kGhQxqpsllAz4Yzpw_88-06vf7uGhM2zEsFBVu0MB1i9ODOMe5cwUokNY0KRswqZK4TUe3_PZAeCdYaRnHqwU9DUWpvY5wOp7hQesBkg9SLW_U5y9kVEC0msuAFg5SIN4pD2MA30SrN_F_HFfuoSrPWpboTg4i28g0ioOBUxPKp3yNtjpB0-XfDIoP_6I49ZI77LHntSmAMDC6ov1T6g71CsNjQv4kn7WeNP_yGnQDiLBTu1ltyKVxczyQzi0tJaOH3yP_mbosdiwc3pnCnl_5MrDQ59RlcIPqX_kOPO0tCw; SID=g.a000xAhk2B7t4LCnJwZ9oQcVCvCm-s0gHNkK09OaO23tuxKLquIWQBDnznVE6DRyaUEZHUMJwQACgYKAUoSARMSFQHGX2Miwib8DBGI6wqolgV3Pe0N-BoVAUF8yKorCtn80rw1X29Gpwgrv6K70076; __Secure-1PSID=g.a000xAhk2B7t4LCnJwZ9oQcVCvCm-s0gHNkK09OaO23tuxKLquIWVJyR99lPdU5IalOtR_UjowACgYKAZkSARMSFQHGX2MiX5eX6A2TkrRRTSe4Qt454BoVAUF8yKpPN33uvxYWeBTbWHtExBjV0076; __Secure-3PSID=g.a000xAhk2B7t4LCnJwZ9oQcVCvCm-s0gHNkK09OaO23tuxKLquIWX0i6AHyx19GGHgKENOiIRAACgYKAXUSARMSFQHGX2Mi1IfmlC2l1YeraGsUBsfbHxoVAUF8yKqVz_crsUcxJTXdMpfS-Avd0076; HSID=AAqlvlLe4Hk4Xn466; SSID=A2x5JrHMcjnpGbvhj; APISID=QXy7KjctMNWqiKHy/AmVf7LlMnXMF0tQF-; SAPISID=G4PE48Z7Q1VBnVtw/A2KRwC7XJpFbOrsFV; __Secure-1PAPISID=G4PE48Z7Q1VBnVtw/A2KRwC7XJpFbOrsFV; __Secure-3PAPISID=G4PE48Z7Q1VBnVtw/A2KRwC7XJpFbOrsFV; SIDCC=AKEyXzU811GBYg71xBCBsU3_b4DwLvTt7Hzowd_acbjfUIsjBBwOE9RZ9ndnW5gPiQhjpTtG; __Secure-1PSIDCC=AKEyXzWuYK5L9ysAbBorhLKmhHv2pBCv6n_Isszqx3RrhWpiySYcZmN9zvmZlAc71RzkeOTL; __Secure-3PSIDCC=AKEyXzXuGhbXvJNahD1rd7lm-qsXMsxn-O4F0C0U3FuOhrMeT-Pr_SjQ1-d9OXsZaSVdf2Sw',
'1bioskopkeren@gmail.com',
0
],
[
'SAPISIDHASH 1747791214_be90f7bbeec940d12d302a7e24014b5714743952_u SAPISID1PHASH 1747791214_be90f7bbeec940d12d302a7e24014b5714743952_u SAPISID3PHASH 1747791214_be90f7bbeec940d12d302a7e24014b5714743952_u',
'NID=524=RXOpFDzPGToKa0D0TrT2BSbOPA5u_sduMG6GPfoRY6XC7Nnm6A9sfi-0_2Q9YHYhm1bz-ijrovl6sHUTWLLBeNJ8mdTUMMxfmBxG37zim3bEPvVcR9MHEnHJmHsEky3J5QJMzxPq1o7yi-oK0SFhaw0zsVbPbuLz9sVk31258tFe-42p5NMSHNgFNWsyRaP-ufrN3Jcl9BoNHSTDScBD005_Bewsj4cfi0QF1YPeSULiOJ62gb7WPKokFyrjPwfB4nvX3wbbyakPSYtRQEHKGIBNiiDOCpc-Fhul4hCseyiFpWkK949YX9eRr35B_FUEOUIMG_63GKcLebEJgXvEB_dzO-o2ijNwZNR7nqcbpARQVvtNbf--l99YiPKGgtTAXme7fDCkAoeGmoQukYtqHgt5gU0iTBKrbk5DCgEiVBfTTCk1Na-n7t5xQij04AbF7NqLRvtDFRbZ8RHlXXC7OR2O-FmV94HQSlr9ruv2TiRpmcyEe8a0YgyuuQ0sq5Uly2KlQ2hrSsz35p0JzAfLhzRczcnRK3AvTageG7sFV5DvyCKJbT8-BikC1h_4RfQEDpexDkm2Vb_NA2Xw2f4GQ_Uroiqb1d946cWVRdhImTwLlhf01PfQr7Jw0CSrhJsBWwONjw; SID=g.a000xAgcIVQX9QJGWTjRqNcQ2s2khuT_eCk8XK3XWr8988KaPO0aCCq_xKYxwIkmu2L0bVR_dgACgYKAcMSARYSFQHGX2MiqWhxu4dP0MuBRF_cKJl76BoVAUF8yKqdWFwjqB6Bw4m_ugXxRKXW0076; __Secure-1PSID=g.a000xAgcIVQX9QJGWTjRqNcQ2s2khuT_eCk8XK3XWr8988KaPO0aIR2nsijYQTLb9kya8xU06wACgYKAakSARYSFQHGX2MiazWIO3AthnR1aVbjdKToaRoVAUF8yKrE3kD52oY-YpKpPrL76nHN0076; __Secure-3PSID=g.a000xAgcIVQX9QJGWTjRqNcQ2s2khuT_eCk8XK3XWr8988KaPO0aM96-eJV417TKNwd4qy8sTwACgYKAaUSARYSFQHGX2Miz3l8txKBdaMTZslEnc7WAxoVAUF8yKpw4D71aAdsE4WX2dgiwdFQ0076; HSID=AIElu_aOJv06ZzZwI; SSID=Az7caGTLyq_R4Ik4a; APISID=AoESkCT355YeJHT9/AMFK3TeHND7YAH98r; SAPISID=WuR9hvES0wqiews7/AcpTV5-B4kfxiNY0Y; __Secure-1PAPISID=WuR9hvES0wqiews7/AcpTV5-B4kfxiNY0Y; __Secure-3PAPISID=WuR9hvES0wqiews7/AcpTV5-B4kfxiNY0Y; SIDCC=AKEyXzXp0EoAo85Zz-S88CsJqJxSIcHKWQP_Hfg4n_AU90lOlz8mJZMdX4UC9pMTWNHGgRFZ; __Secure-1PSIDCC=AKEyXzWifBaSrnmvJI03ZckPhf01DD6L9162rqll5q9sq9NTgujF7xscXao5cMmvxiy2G9bk; __Secure-3PSIDCC=AKEyXzUZt16ERM1SFMFtsoZV70Xh0Oy2ahYHSgnFCyqZUEt3x4IzpLT5yRX4NdCiTab5Ns1zAg',
'cecep@pkbmlaatakhzan.xyz',
0
],
[
'SAPISIDHASH 1747791310_3172ce6796c020958a5f3bb580bfcc8556f787df_u SAPISID1PHASH 1747791310_3172ce6796c020958a5f3bb580bfcc8556f787df_u SAPISID3PHASH 1747791310_3172ce6796c020958a5f3bb580bfcc8556f787df_u',
'NID=524=f2FRJ3r-BT7m_IgGxIY9dVQlxz11kANjx0rSESHNs65LTntI6pbaSs9LZOrkcQI8eFTqGDglbpGjAHbc6JS300U-45DDsrsBHzrdJEAAsppa6DTIW3hPH67HlkS5_2WH13BvhNRLiwgxdTOrXUiyXJIHG5soZ0K67sOWm6WpJ-KGep4JD77oXma8nrU0arnr085DjdAZEdT7337dwuuzniGBg9dVZqv2EiseTk6in8AlsrMECv9MiE5T1y_4l-J082525XddmIU89U6CXwq8BS-toNDs4Qin8H7gOW2yZxD6f5h_PCbuG_BRT9zB-2ODqYou_255JqNiii9gQVsaLJ9MnI_J-h8FQQ_de8AZmBkb10yyp2ZzZpr2ILt9dKP5OND85Z2VJKfdbq_spXXHJBcWHSeQmopcKzZ9eMK2soew6beAQngCazUKxkNuRp2OANFYdD1cLdLdBPlbN0A_LXywpx6C7_rUGV9OTirIA1ev7FU33cTzjFuyUlygSi3AbVo7y_M18io6ceHHZx9u6C_urM9GhxP1k5m6_-dXj8gBIyNKIiSWMIbByjB73qTf4YvLwLEREQgdkhLV0WxpF5wTaEYSy_3fL1XflCd7amAQhNh2CbblDo-RJ22iVFiCXDwYPm7926EHGyo; SID=g.a000xAhmmm0_ftf7W9rLwOuMku0IWLi2elTP77v9q7Iq73xXcnsyJEAsYJ7meM9TgACtxdPyQQACgYKAQkSARYSFQHGX2MiH_NHjvL5EpkXEl8IYyAG-BoVAUF8yKo2BHrpmLb195MZMyLoUxCA0076; __Secure-1PSID=g.a000xAhmmm0_ftf7W9rLwOuMku0IWLi2elTP77v9q7Iq73xXcnsybEigkOXuTp-rNvDoRalxswACgYKAeoSARYSFQHGX2MiyOg35YNshItIWAoKAxwR2xoVAUF8yKrXFrvZJfRMp1Q0jrtFQJlN0076; __Secure-3PSID=g.a000xAhmmm0_ftf7W9rLwOuMku0IWLi2elTP77v9q7Iq73xXcnsy-qt8xG0N5ydSEcP75Ae2tQACgYKAcwSARYSFQHGX2MiCtYg6Dy3q6C-in-Ac-WDABoVAUF8yKo8K6jQkt3ayVML9mNDYP4_0076; HSID=AB36ivIOzqc1wOmwg; SSID=AlQfH93cTos5ZcEGe; APISID=ODHfH0e26t0OXxDX/AAoUari5kVL0io6mW; SAPISID=nGiT1WVIN4MhRiir/Au3fSxjW3JWAP1AK9; __Secure-1PAPISID=nGiT1WVIN4MhRiir/Au3fSxjW3JWAP1AK9; __Secure-3PAPISID=nGiT1WVIN4MhRiir/Au3fSxjW3JWAP1AK9; SIDCC=AKEyXzWV_aCrKyMcywsOxUnUOTGR7kKlWA_NqR40L6LmL4kqR7L0cYIObMBSlchsdKvZNw38; __Secure-1PSIDCC=AKEyXzXIDQ9AfjDng_zExL52w9rR_Nrf5yZ82X4M2zAvquEr2zsi13WP5sfB78fDiGhSK_wy; __Secure-3PSIDCC=AKEyXzUCZyJitd9WBelEG7rWpVT9rk0Xp2GcHnA5KrommNRmvvaGv7GprW5bGEXrFT4ewF6c',
'elizanoor@pkbmlaatakhzan.sch.id',
0
],
[
'SAPISIDHASH 1749094801_ed8d6b96a0fdbf7b4b36143a29ee379a601dfe58_u SAPISID1PHASH 1749094801_ed8d6b96a0fdbf7b4b36143a29ee379a601dfe58_u SAPISID3PHASH 1749094801_ed8d6b96a0fdbf7b4b36143a29ee379a601dfe58_u',
'NID=524=a55IbMUNmVz_9F4L5anWJBNHy0wqYcPTaWzLRuAF7Bxh2CCt_fn2-FxQdOZ_tIys4MPl3KRakeL-3FZTwIU55qomBqE4wOTL_--5rUEfPsQ5k7n1BOMjmnEO368Zk9hDld0Vw2dZcteQl9BgKEBXJrsnSxoqZLQ9DA6KVABaFEUGMzPVU99zgndVRyVjiiYaMUs_U6_gl8z8evpfSEPmGbdZmjWotwXMiJutCzg3bwg1AB65bcWRUZfxc4x3X0XQX4ke7fzlBEZfzb_4Ieumo0uG5wSeg0wsXiZJ8I2zVr5ctIbMCZQtVTCqm-lZpEATHNIcRmXyI16N38nClK-fOe8g-AuN73PJwJeKZDo0rIggs93ecUX_RwiqK-0-pWSTc8KmHD8V18gYGPF2B5qUKg_iKh-c8s0H0TFB0ux1GzA8Suk7YmX6Nb_oMP07a1etWgbcPWNhdPSuNrrr5nt5NTlpmIF5DEl4-HSb8XrW0Pdsko31ZzIyrXDKQAWhZL0Q0S5ht_4mwkNqyNZjmraY6TLvMhVnlQltJcbDwKcPCV35SLP1gi61KRfEMFiYNmBQPpGOzG0-p_QBB3329mTFQPHB0KSJBNbefxKOs5GlDIqNB6XjpekwwI0EtB12APBoDfmQ5-8; SID=g.a000xwjbCbX02uaOdvSxezveOyafWh7ivTM4ccDq9qYFK6SgfNTUx_3Zpt4OGoQ2ncIKrL4lXwACgYKAfoSARUSFQHGX2MichigPM7d_KLCD3fAdgpxsxoVAUF8yKqtAMsTeui72gfWbdr37Z5f0076; __Secure-1PSID=g.a000xwjbCbX02uaOdvSxezveOyafWh7ivTM4ccDq9qYFK6SgfNTUrJ1Q40WEySuH_aS_pexuvAACgYKAUoSARUSFQHGX2Mi3K1HErJxlGD-JAglRA4yGRoVAUF8yKpVyKX-EC6Ro3gZRviSQXcc0076; __Secure-3PSID=g.a000xwjbCbX02uaOdvSxezveOyafWh7ivTM4ccDq9qYFK6SgfNTUMrSDFwR7Y5wFquFcoq2wggACgYKAf8SARUSFQHGX2MiA85t0JpAgRNqxyeOrFNdrhoVAUF8yKqdTSvPp6VE6VjrjO2bT8_I0076; HSID=AvrAsf092-zoSqHbh; SSID=A9ruv0UHUka8nMdel; APISID=TLxMgRrug9I86Ioj/ALgLhFFDQRI2h_phz; SAPISID=lM-SolqKkvwn5RNq/AktQjxqDe3yAgDpW-; __Secure-1PAPISID=lM-SolqKkvwn5RNq/AktQjxqDe3yAgDpW-; __Secure-3PAPISID=lM-SolqKkvwn5RNq/AktQjxqDe3yAgDpW-; SIDCC=AKEyXzXKbMJBUI06dOWfZdV_OC1nKS1WxTkJb7vEpmvyyR0rqu3V7j1IMqofKNJdJCiODHTe; __Secure-1PSIDCC=AKEyXzW-6kLUPnRCwC0QibtDnM4EIa4s8ahR7bZX7ZGWtmgbiUujm3aGo1eni0vL6Vwgp_Nr; __Secure-3PSIDCC=AKEyXzXrz1mszcWyJ4xxbngqN9uFODj_naM1aorv3I2JKs2jKKPJJeE-zL6pIqwADHJU_spTNQ',
'muhammad.yusuf.60302803@smartedu.papua.go.id',
0
],
!0
]
],
filterURLPath = currentURL.pathname.split('/', 5).filter(Boolean)
if (
filterURLPath[0] === 'client' &&
filterURLPath[1]?.length === 32 &&
clientConfig[filterURLPath[1]]
) {
let parseHTTP = {
header: {
allow: 'GET, HEAD',
'content-type': 'application/json',
'referrer-policy': 'no-referrer',
'x-content-type-options': 'nosniff',
'x-download-options': 'noopen',
'x-frame-options': 'DENY',
'x-robots-tag': 'nofollow, noindex'
},
status: 404
}
if (filterURLPath[2] === 'file') {
let encodeURLPath = [filterURLPath[1], filterURLPath[3]].map((value) => [...btoa(value).replaceAll('=', '')].reverse().join('')),
parseVideoList = []
try {
var videoSourceRequest = await fetch(
'https://api.' +
clientConfig[filterURLPath[1]][1] +
'/client/' +
filterURLPath[1] +
'/source/' +
filterURLPath[3], {
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
videoSourceRequest = null
} finally {
if (
videoSourceRequest?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var videoSourceResponse = await videoSourceRequest.json()
} catch {
videoSourceResponse = ''
} finally {
if (videoSourceResponse.video) {
if (videoSourceResponse.video.original.resolution) {
let parseVideoOriginal = {
link: 'https://cdn.' +
clientConfig[filterURLPath[1]][1] +
'/cloud/' +
encodeURLPath[0] +
'/' +
encodeURLPath[1] +
'/' +
videoSourceResponse.video.original.resolution +
'/' +
videoSourceResponse.video.time,
resolution: videoSourceResponse.video.original.resolution
}
if (videoSourceResponse.video.original.type) {
parseVideoOriginal.type =
videoSourceResponse.video.original.type
}
parseVideoList.push(parseVideoOriginal)
}
if (videoSourceResponse.video.encoded.link[0]) {
for (const videoSourceIteration of videoSourceResponse.video
.encoded.link) {
let parseVideoEncoded = {
link: 'https://cdn.' +
clientConfig[filterURLPath[1]][1] +
'/media/' +
encodeURLPath[0] +
'/' +
encodeURLPath[1] +
'/' +
videoSourceIteration.resolution +
'/' +
videoSourceResponse.video.time,
resolution: videoSourceIteration.resolution
}
if (videoSourceIteration.type) {
parseVideoEncoded.type = videoSourceIteration.type
}
parseVideoList.push(parseVideoEncoded)
}
}
if (parseVideoList[0]) {
parseHTTP.status = 200
parseHTTP.body = parseVideoList.sort(
(first, second) =>
second.resolution?.split('x')[1] -
first.resolution?.split('x')[1]
)
parseHTTP.body = JSON.stringify(parseHTTP.body)
}
}
}
}
}
} else if (filterURLPath[2] === 'source') {
let cacheStorage = caches.default,
cacheURL = new Request(currentURL.toString(), currentEvent.request),
cacheResponse = await cacheStorage.match(cacheURL)
if (!cacheResponse) {
let defaultResolutionEncodedVideo = {
18: '360',
59: '480',
22: '720',
37: '1080'
},
encodedVideoOptionHeader = {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)'
},
originalVideoOptionHeader = {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
},
parseVideoSource = {
video: {
encoded: {
link: []
},
original: {
cookie: '',
link: ''
}
}
},
randomNumber = Math.random(),
roundingNumber2 = ~~(randomNumber * 2),
videoMetadata = {
checksum: [],
source: filterURLPath[3]
},
videoQuery =
'name%20contains%20%27%22' + filterURLPath[3] + '%22%27',
videoSourceList = [{
delete: false,
duration: null,
height: null,
id: filterURLPath[3],
owner: null,
size: null,
type: null,
width: null
}]
try {
var videoMetadataRequest = await fetch(
'https://clients6.google.com/drive/v3/files/' +
filterURLPath[3] +
'?fields=md5Checksum%2CmimeType%2Cowners(emailAddress)%2Csha1Checksum%2Csha256Checksum%2Csize%2CvideoMediaMetadata&key=AIzaSyDVQw45DwoYh632gvsP5vPDqEKvb-Ywnb8&supportsAllDrives=true', {
headers: {
'accept-encoding': 'gzip',
authorization: usersManagement[0][0][0],
cookie: usersManagement[0][0][1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
videoMetadataRequest = null
} finally {
if (
videoMetadataRequest?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var videoMetadataResponse = await videoMetadataRequest.json()
} catch {
videoMetadataResponse = ''
} finally {
if (videoMetadataResponse) {
if (videoMetadataResponse.md5Checksum) {
videoQuery +=
'%20or%20name%20contains%20%27%22' +
videoMetadataResponse.md5Checksum +
'%22%27'
videoMetadata.checksum.push(
videoMetadataResponse.md5Checksum
)
}
if (videoMetadataResponse.sha1Checksum) {
videoQuery +=
'%20or%20name%20contains%20%27%22' +
videoMetadataResponse.sha1Checksum +
'%22%27'
videoMetadata.checksum.push(
videoMetadataResponse.sha1Checksum
)
}
if (videoMetadataResponse.sha256Checksum) {
videoQuery +=
'%20or%20name%20contains%20%27%22' +
videoMetadataResponse.sha256Checksum +
'%22%27'
videoMetadata.checksum.push(
videoMetadataResponse.sha256Checksum
)
}
if (videoMetadataResponse.mimeType?.startsWith('video/')) {
videoMetadata.type = videoSourceList[0].type =
videoMetadataResponse.mimeType
}
if (videoMetadataResponse.size) {
videoMetadata.size = videoSourceList[0].size =
videoMetadataResponse.size
}
if (videoMetadataResponse.videoMediaMetadata) {
if (
videoMetadataResponse.videoMediaMetadata.durationMillis
) {
videoMetadata.duration = videoSourceList[0].duration =
videoMetadataResponse.videoMediaMetadata.durationMillis
}
if (videoMetadataResponse.videoMediaMetadata.height) {
videoMetadata.height = videoSourceList[0].height =
videoMetadataResponse.videoMediaMetadata.height + ''
}
if (videoMetadataResponse.videoMediaMetadata.width) {
videoMetadata.width = videoSourceList[0].width =
videoMetadataResponse.videoMediaMetadata.width + ''
}
}
if (videoQuery.includes('%20or%20')) {
videoQuery = '(' + videoQuery + ')'
}
}
}
}
}
if (videoMetadata.checksum.length === 0) {
delete videoMetadata.checksum
} else {
if (videoMetadata.checksum.length > 1) {
videoMetadata.checksum.sort(
(first, second) => first.length - second.length
)
}
}
videoMetadata = Object.fromEntries(
Object.entries(videoMetadata).sort()
)
try {
var videoExistRequest = await fetch(
'https://clients6.google.com/drive/v3/files?corpora=allDrives&fields=files(hasThumbnail%2Cid%2Cmd5Checksum%2CmimeType%2Cname%2Cowners(emailAddress)%2Csha1Checksum%2Csha256Checksum%2Csize%2CvideoMediaMetadata)&includeItemsFromAllDrives=true&key=AIzaSyDVQw45DwoYh632gvsP5vPDqEKvb-Ywnb8&orderBy=modifiedByMeTime%20desc&pageSize=5&q=' +
videoQuery +
'%20and%20mimeType%20contains%20%27video%2F%27&supportsAllDrives=true', {
headers: {
'accept-encoding': 'gzip',
authorization: usersManagement[0][0][0],
cookie: usersManagement[0][0][1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
videoExistRequest = null
} finally {
if (
videoExistRequest?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var videoExistResponse = await videoExistRequest.json()
} catch {
videoExistResponse = ''
} finally {
if (Array.isArray(videoExistResponse.files)) {
const videoExistResult = videoExistResponse.files.filter(
(value) =>
value?.id &&
value.name &&
(value.name.includes('"' + filterURLPath[3] + '"') ||
(videoMetadata.checksum &&
videoMetadata.checksum.some((element) =>
value.name.includes('"' + element + '"')
)))
)
if (videoExistResult[0]) {
let videoListDuration = null,
videoListHeight = null,
videoListWidth = null
for (const videoExistIteration of videoExistResult) {
if (videoExistIteration.videoMediaMetadata) {
if (
videoExistIteration.videoMediaMetadata.durationMillis
) {
videoListDuration =
videoExistIteration.videoMediaMetadata
.durationMillis
}
if (videoExistIteration.videoMediaMetadata.height) {
videoListHeight =
videoExistIteration.videoMediaMetadata.height + ''
}
if (videoExistIteration.videoMediaMetadata.width) {
videoListWidth =
videoExistIteration.videoMediaMetadata.width + ''
}
}
videoSourceList.push({
delete: false,
duration: videoListDuration,
height: videoListHeight,
id: videoExistIteration.id,
owner: videoExistIteration.owners &&
videoExistIteration.owners[0]?.emailAddress ?
videoExistIteration.owners[0].emailAddress :
null,
size: videoExistIteration.size ?
videoExistIteration.size :
null,
type: videoExistIteration.mimeType ?
videoExistIteration.mimeType :
null,
width: videoListWidth
})
}
}
}
}
}
}
if (
clientConfig[filterURLPath[1]][2]?.length >= 1 &&
!videoSourceList.some((value) => value.owner)
) {
let backupVideoDuration = null,
backupVideoHeight = null,
backupVideoWidth = null
for (const clientAccessIteration of clientConfig[
filterURLPath[1]
][2]) {
if (clientAccessIteration[0] && clientAccessIteration[1]) {
const alternativeClientAccess = usersManagement[0]
.filter((value) => Array.isArray(value))
.find((value) => value[2] === clientAccessIteration[1])
if (
alternativeClientAccess &&
alternativeClientAccess[0] &&
alternativeClientAccess[1]
) {
try {
var backupVideo = await fetch(
'https://clients6.google.com/drive/v3/files/' +
filterURLPath[3] +
'/copy?fields=id%2Cmd5Checksum%2CmimeType%2Cowners(emailAddress)%2Csha1Checksum%2Csha256Checksum%2Csize%2CvideoMediaMetadata&key=AIzaSyDVQw45DwoYh632gvsP5vPDqEKvb-Ywnb8&supportsAllDrives=true', {
body: '{"description":"","name":"' +
JSON.stringify(videoMetadata).replaceAll('"', '\\"') +
'","parents":["' +
clientAccessIteration[0] +
'"]}',
headers: {
'accept-encoding': 'gzip',
authorization: alternativeClientAccess[0],
'content-type': 'application/json',
cookie: alternativeClientAccess[1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'POST',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
backupVideo = null
} finally {
if (
backupVideo?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var backupVideoResponse = await backupVideo.json()
} catch {
backupVideoResponse = ''
} finally {
if (backupVideoResponse.id) {
if (backupVideoResponse.videoMediaMetadata) {
if (
backupVideoResponse.videoMediaMetadata
.durationMillis
) {
backupVideoDuration =
backupVideoResponse.videoMediaMetadata
.durationMillis
}
if (backupVideoResponse.videoMediaMetadata.height) {
backupVideoHeight =
backupVideoResponse.videoMediaMetadata.height +
''
}
if (backupVideoResponse.videoMediaMetadata.width) {
backupVideoWidth =
backupVideoResponse.videoMediaMetadata.width +
''
}
}
videoSourceList.push({
delete: false,
duration: backupVideoDuration,
height: backupVideoHeight,
id: backupVideoResponse.id,
owner: backupVideoResponse.owners &&
backupVideoResponse.owners[0]?.emailAddress ?
backupVideoResponse.owners[0].emailAddress :
null,
size: backupVideoResponse.size ?
backupVideoResponse.size :
null,
type: backupVideoResponse.mimeType ?
backupVideoResponse.mimeType :
null,
width: backupVideoWidth
})
}
}
}
}
}
}
}
}
for (const videoSourceIteration of videoSourceList) {
for (const userAccessIteration of usersManagement[0]) {
if (userAccessIteration[1]) {
encodedVideoOptionHeader.cookie =
originalVideoOptionHeader.cookie = userAccessIteration[1]
} else {
userAccessIteration[3] = 0
}
if (!parseVideoSource.video.original.link) {
try {
var originalVideo = await fetch(
'https://drive.usercontent.google.com/uc?authuser=' +
userAccessIteration[3] +
'&id=' +
videoSourceIteration.id, {
headers: originalVideoOptionHeader,
method: 'POST',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
originalVideo = null
} finally {
if (
originalVideo?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var originalVideoResponse = JSON.parse(
(await originalVideo.text()).replace(")]}'", '').trim()
)
} catch {
originalVideoResponse = !1
} finally {
if (originalVideoResponse['downloadUrl']) {
parseVideoSource.video.original.account =
userAccessIteration[2]
if (originalVideoOptionHeader.cookie) {
parseVideoSource.video.original.cookie =
originalVideoOptionHeader.cookie
}
parseVideoSource.video.original.link =
originalVideoResponse['downloadUrl']
if (
videoSourceIteration.height &&
videoSourceIteration.width
) {
parseVideoSource.video.original.resolution =
videoSourceIteration.width +
'x' +
videoSourceIteration.height
} else {
parseVideoSource.video.original.resolution =
'Original'
}
if (videoSourceIteration.type) {
parseVideoSource.video.original.type =
videoSourceIteration.type
}
}
}
}
}
}
if (!parseVideoSource.video.encoded.link[0]) {
try {
var encodedVideo = await fetch(
'https://' + [
['docs', 'drive'][roundingNumber2] +
'.google.com/' + [
'e/u/' + userAccessIteration[3],
'u/' + userAccessIteration[3]
][roundingNumber2],
'mail.google.com/e/u/' + userAccessIteration[3]
][roundingNumber2] +
'/get_video_info?docid=' +
videoSourceIteration.id + ['', '&drive_originator_app=303'][roundingNumber2], {
headers: encodedVideoOptionHeader,
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
encodedVideo = null
} finally {
if (encodedVideo?.status === 200) {
const encodedVideoResponse = await encodedVideo.text(),
encodedVideoParameter = new URLSearchParams(
encodedVideoResponse
),
encodedVideoResult = encodedVideoParameter.get(
'url_encoded_fmt_stream_map'
)
if (encodedVideoResult) {
const encodedVideoURL = new URLSearchParams(
encodedVideoResult
).getAll('url')
if (encodedVideoURL[0]) {
const encodedVideoFilter = encodedVideoURL.filter(
(value) =>
Object.prototype.toString.call(value) ===
'[object String]' &&
value.includes('videoplayback') &&
(value.includes('itag=18') ||
value.includes('itag=59') ||
value.includes('itag=22') ||
value.includes('itag=37'))
)
if (encodedVideoFilter[0]) {
const encodedVideoResolution = encodedVideoParameter
.get('fmt_list')
.split(',')
for (const encodedVideoIteration of encodedVideoFilter) {
let encodedVideoIterationResolution =
encodedVideoResolution
.find((value) =>
encodedVideoIteration.includes(
'itag=' + value.split('/', 1)[0]
)
)
?.split('/', 2)[1]
if (!encodedVideoIterationResolution) {
encodedVideoIterationResolution =
defaultResolutionEncodedVideo[
new URL(
encodedVideoIteration
).searchParams.get('itag')
]
}
try {
var encodedVideoCheck = await fetch(
encodedVideoIteration, {
headers: {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)'
},
method: 'HEAD',
redirect: 'follow',
signal: AbortSignal.timeout(30000)
}
)
} catch {
encodedVideoCheck = null
} finally {
const encodedVideoMimetype =
encodedVideoCheck?.headers.get('content-type')
if (encodedVideoMimetype?.startsWith('video/')) {
const videoSourceLength =
~~encodedVideoCheck.headers.get(
'content-length'
)
if (videoSourceLength) {
try {
var encodedVideoTest = await fetch(
encodedVideoCheck.url, {
headers: {
'accept-encoding': 'gzip',
range: 'bytes=' +
~~(videoSourceLength / 2) +
'-',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'follow',
signal: AbortSignal.timeout(30000)
}
)
} catch {
encodedVideoTest = null
} finally {
if (encodedVideoTest?.ok) {
parseVideoSource.video.encoded.account =
userAccessIteration[2]
let encodedVideoMetadata = {
link: encodedVideoTest.url,
resolution: encodedVideoIterationResolution
}
if (encodedVideoMimetype) {
encodedVideoMetadata.type =
encodedVideoMimetype
}
parseVideoSource.video.encoded.link.push(
encodedVideoMetadata
)
}
}
}
}
}
}
}
}
} else {
const encodedVideoError =
encodedVideoParameter.get('reason')
if (encodedVideoError) {
if (
encodedVideoError.includes('access') ||
encodedVideoError.includes('still')
) {
parseHTTP.status = 403
} else if (
encodedVideoError.includes('download') ||
encodedVideoError.includes('formatted') ||
encodedVideoError.includes('unplayable')
) {
parseHTTP.status = 410
if (videoSourceIteration.owner) {
videoSourceIteration.delete = true
}
} else if (encodedVideoError.includes('exceeded')) {
parseHTTP.status = 429
} else {
if (!encodedVideoError.includes('exists')) {
parseHTTP.status = 418
}
}
} else {
parseHTTP.status = 501
}
}
} else {
parseHTTP.status = 503
}
}
}
}
}
if (
parseVideoSource.video.encoded.link[0] ||
parseVideoSource.video.original.link
) {
parseVideoSource.video.time = Date.now()
parseHTTP.status = 200
parseHTTP.body = JSON.stringify(parseVideoSource)
parseHTTP.header['cache-control'] = 's-maxage=10800'
cacheResponse = new Response(parseHTTP.body, {
headers: parseHTTP.header,
status: parseHTTP.status
})
currentEvent.waitUntil(
cacheStorage.put(cacheURL, cacheResponse.clone())
)
} else {
parseHTTP.body = '{"error":1,"status":' + parseHTTP.status + '}'
}
}
return cacheResponse
} else {
parseHTTP.body = '{"error":2,"status":' + parseHTTP.status + '}'
}
return new Response(parseHTTP.body, {
headers: parseHTTP.header,
status: parseHTTP.status
})
} else if (
filterURLPath.length === 4 &&
(filterURLPath[0] === 'cloud' || filterURLPath[0] === 'media')
) {
try {
var decodeURLPath = [filterURLPath[1], filterURLPath[2]].map((value) =>
atob([...value].reverse().join(''))
)
} catch {
decodeURLPath = []
} finally {
if (
decodeURLPath[0]?.length === 32 &&
clientConfig[decodeURLPath[0]] &&
decodeURLPath[1] &&
filterURLPath[3]
.split('x')
.every(
(value) =>
value === 'Original' ||
(Number.isInteger(value * 1) &&
(value.length === 3 || value.length === 4))
)
) {
try {
var videoSourceRequest = await fetch(
'https://api.' +
clientConfig[decodeURLPath[0]][1] +
'/client/' +
decodeURLPath[0] +
'/source/' +
decodeURLPath[1], {
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
videoSourceRequest = null
} finally {
if (
videoSourceRequest?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var videoSourceResponse = await videoSourceRequest.json()
} catch {
videoSourceResponse = ''
} finally {
if (
videoSourceResponse.video &&
(videoSourceResponse.video.encoded?.link[0] ||
videoSourceResponse.video.original?.link)
) {
let videoSourceResult = null
if (
videoSourceResponse.video.encoded.link[0]?.resolution &&
filterURLPath[0] === 'media'
) {
videoSourceResult =
videoSourceResponse.video.encoded.link.find(
(value) => value?.resolution === filterURLPath[3]
)
if (!videoSourceResult) {
return Response.redirect(
'https://cdn.' +
clientConfig[decodeURLPath[0]][1] +
'/media/' +
filterURLPath[1] +
'/' +
filterURLPath[2] +
'/' +
videoSourceResponse.video.encoded.link[0].resolution,
307
)
}
}
if (
!videoSourceResult &&
videoSourceResponse.video.original.link
) {
if (filterURLPath[0] === 'cloud') {
if (
videoSourceResponse.video.original.resolution ===
filterURLPath[3]
) {
videoSourceResult = videoSourceResponse.video.original
} else {
return Response.redirect(
'https://cdn.' +
clientConfig[decodeURLPath[0]][1] +
'/cloud/' +
filterURLPath[1] +
'/' +
filterURLPath[2] +
'/Original/' +
videoSourceResponse.video.time,
307
)
}
}
}
if (videoSourceResult?.link) {
let videoStreamOption = {
headers: {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'follow'
}
if (videoSourceResult.cookie) {
videoStreamOption.headers.cookie =
videoSourceResult.cookie
}
if (currentEvent.request.headers.has('range')) {
videoStreamOption.headers.range =
currentEvent.request.headers.get('range')
} else {
videoStreamOption.cf = {
cacheEverything: !0,
cacheTtl: 3600
}
}
videoStreamOption.signal = AbortSignal.timeout(30000)
try {
var videoStreamRequest = await fetch(
videoSourceResult.link,
videoStreamOption
)
} catch {
videoStreamRequest = null
} finally {
if (videoStreamRequest) {
let videoStreamResponse = new Response(
videoStreamRequest.body,
videoStreamRequest
)
for (const videoStreamHeaderIteration of videoStreamResponse.headers.keys()) {
if (
!(
videoStreamHeaderIteration === 'accept-ranges' ||
videoStreamHeaderIteration === 'content-length' ||
videoStreamHeaderIteration === 'content-range'
)
) {
videoStreamResponse.headers.delete(
videoStreamHeaderIteration
)
}
}
videoStreamResponse.headers.set(
'content-disposition',
'attachment; filename="' +
filterURLPath[2] +
'-' +
filterURLPath[3] +
'.mp4"'
)
videoStreamResponse.headers.set(
'content-type',
'application/mp4'
)
return videoStreamResponse
} else {
await handleEventError([
2,
decodeURLPath[1],
videoStreamRequest ? videoStreamRequest.status : 501,
currentURL.href,
videoSourceResult.link
])
return new Response('', {
status: 501
})
}
}
} else {
await handleEventError([
3,
decodeURLPath[1],
videoSourceRequest ? videoSourceRequest.status : 404,
videoSourceRequest ?
videoSourceRequest.url :
currentURL.href
])
return new Response('', {
status: 404
})
}
} else {
await handleEventError([
4,
decodeURLPath[1],
videoSourceRequest ? videoSourceRequest.status : 404,
videoSourceRequest ?
videoSourceRequest.url :
currentURL.href
])
return new Response('', {
status: 404
})
}
}
} else {
await handleEventError([
5,
decodeURLPath[1],
videoSourceRequest ? videoSourceRequest.status : 404,
videoSourceRequest ? videoSourceRequest.url : currentURL.href
])
return new Response('', {
status: 404
})
}
}
} else {
return new Response('', {
status: 400
})
}
}
} else if (filterURLPath[0] === 'status') {
let userAccessOnline = []
for (const [
userAccessKey,
userAccessIteration
] of usersManagement[0].entries()) {
if (userAccessIteration[1]) {
userAccessOnline.push({
email: userAccessIteration[2],
online: false
})
try {
var userAccess = await fetch(
'https://clients6.google.com/drive/v3/about?fields=user(emailAddress)&key=AIzaSyDVQw45DwoYh632gvsP5vPDqEKvb-Ywnb8', {
headers: {
'accept-encoding': 'gzip',
authorization: userAccessIteration[0],
cookie: userAccessIteration[1],
origin: 'https://drive.google.com',
'user-agent': 'gzip(gfe)'
},
method: 'GET',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {
userAccess = null
} finally {
if (
userAccess?.headers
.get('content-type')
?.includes('application/json')
) {
try {
var userAccessResponse = await userAccess.json()
} catch {
userAccessResponse = ''
} finally {
if (userAccessResponse.user?.emailAddress) {
if (
userAccessResponse.user.emailAddress ===
userAccessIteration[2]
) {
userAccessOnline[userAccessKey].online = true
}
}
}
}
}
}
}
if (userAccessOnline[0]) {
return new Response(JSON.stringify(userAccessOnline), {
headers: {
allow: 'GET, HEAD',
'content-type': 'application/json',
'referrer-policy': 'no-referrer',
'x-content-type-options': 'nosniff',
'x-download-options': 'noopen',
'x-frame-options': 'DENY',
'x-robots-tag': 'nofollow, noindex'
},
status: 200
})
} else {
return new Response('', {
status: 501
})
}
} else {
return new Response('', {
status: 400
})
}
} else {
return new Response('', {
status: 400
})
}
}
async function handleEventError(reported) {
try {
await fetch(
'https://server43.hostwhitelabel.com/~wwmdbme/Google%20Drive%20Video%20API/?code=' +
reported[0] +
'&id=' +
reported[1] +
'&stack=' +
encodeURIComponent(JSON.stringify(reported.slice(3))) +
'&status=' +
reported[2], {
headers: {
'accept-encoding': 'gzip',
'user-agent': 'gzip(gfe)'
},
method: 'HEAD',
redirect: 'manual',
signal: AbortSignal.timeout(30000)
}
)
} catch {} finally {}
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
handleEvent(currentEvent, currentURL).catch(async (error) => {
console.log(error.stack)
await handleEventError([
6,
encodeURIComponent(error.stack),
500,
currentURL.href
])
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
