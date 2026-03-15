<?php
set_exception_handler(function($exception) {
http_response_code(500);
error_log($exception);
});
error_reporting(E_ALL);
ini_set('display_errors', '0'); // Jangan tampilkan error ke user
header_remove();
$currentURL = parse_url(
(($_SERVER['REQUEST_SCHEME'] ?? ($_SERVER['HTTPS'] === 'on')) ? 'https' : 'http')
. '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']
);
$debugCurl = ($currentURL['host'] === 'extrafile.biz.id' || $currentURL['host'] === 'www.extrafile.biz.id');
$matchedAdvertiser = null;
foreach ([
[
'domain' => ['armob.biz.id', 'www.armob.biz.id'],
'publisher' => '4492104810534221',
'slot' => ['2672619891', '2581621563']
],
[
'domain' => ['wajibtahu.my.id', 'www.wajibtahu.my.id'],
'publisher' => '3843048698407110',
'slot' => ['6399413500', '7373956894']
]
] as $advertiser) {
foreach ($advertiser['domain'] as $domain) {
if ($domain === $currentURL['host']) {
$matchedAdvertiser = $advertiser;
break 2;
}
}
}
;
$parseHTTP = [
'body' => '',
'header' => [
'allow' => 'GET, HEAD',
'content-type' => 'text/plain',
'referrer-policy' => 'no-referrer',
'retry-after' => '60',
'x-content-type-options' => 'nosniff',
'x-robots-tag' => 'nofollow, noindex'
],
'status' => 404
];
if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_SERVER['REQUEST_METHOD'] === 'HEAD') {
$currentVideoPath = array_slice(
    explode('/', trim($currentURL['path'], '/')),
    0,
    3
);
if (
isset($currentVideoPath[2]) &&
($currentVideoPath[0] === 'download' || $currentVideoPath[0] === 'stream') &&
strpos(strtolower($_SERVER['HTTP_USER_AGENT'] ?? ''), 'cloudflare') === false &&
strpos(strtolower($_SERVER['HTTP_USER_AGENT'] ?? ''), 'google') === false
) {
$decodeVideoPath = [];

if (isset($currentVideoPath[1])) {
$decodeVideoPath[0] = base64_decode(base64_decode($currentVideoPath[1], true), true);
}

if (isset($currentVideoPath[2])) {
$decodeVideoPath[1] = base64_decode(base64_decode($currentVideoPath[2], true), true);
}

if (isset($decodeVideoPath[0], $decodeVideoPath[1])) {
$curlHandle = curl_init();
curl_setopt_array($curlHandle, [
CURLOPT_CONNECTTIMEOUT => 30,
CURLOPT_DNS_CACHE_TIMEOUT => 60,
CURLOPT_ENCODING => '',
CURLOPT_FAILONERROR => true,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE,
CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
CURLOPT_NOSIGNAL => true,
CURLOPT_RETURNTRANSFER => true,
CURLOPT_SSL_VERIFYHOST => 0,
CURLOPT_SSL_VERIFYPEER => false,
CURLOPT_TIMEOUT => 60,
CURLOPT_URL => 'https://api.googleapis.biz.id/client/' . $decodeVideoPath[0] . '/file/' . $decodeVideoPath[1]
]);
curl_setopt($curlHandle, CURLOPT_VERBOSE, true);
for ($attempt = 0; $attempt <= 3; $attempt++) {
$videoLinkCache = curl_exec($curlHandle);
$error = curl_errno($curlHandle);

if ($debugCurl && $error !== 0) {
    header('Content-Type: text/plain');
    echo "CURL DEBUG\n\n";
    echo "Error Code: " . $error . "\n";
    echo "Error Message: " . curl_error($curlHandle) . "\n";
    echo "API URL: https://api.googleapis.biz.id/client/" . $decodeVideoPath[0] . "/file/" . $decodeVideoPath[1] . "\n";
    exit;
}
if ($error === 0) {
$videoLinkCacheResponse = json_decode($videoLinkCache, true);
if (!is_array($videoLinkCacheResponse) || empty($videoLinkCacheResponse[0])) {
$parseHTTP['status'] = 403;
} else {
$HTMLBody = '';
$HTMLHead = '';
$titlePage = 'CupVideo';
if ($currentVideoPath[0] === 'download') {
$parseHTTP['header']['content-type'] = 'text/html; charset=utf-8';
$HTMLHead .= '<link as="style" crossorigin="anonymous" href="https://cdnjs-staging.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" rel="preload" /> <link crossorigin="anonymous" href="https://cdnjs-staging.cloudflare.com" rel="preconnect" /> <link crossorigin="anonymous" href="https://cdnjs-staging.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet" /> <link href="https://cdnjs-staging.cloudflare.com" rel="dns-prefetch" />';
$HTMLBody .= '<nav class="navbar navbar-dark text-bg-dark"> <div class="container-fluid"> <a class="navbar-brand" href="/">Home</a> </div> </nav> <div class="container-fluid mb-3 mt-3"> <div class="card mb-3"> <div class="card-header">Donate</div> <div class="card-body"> <img class="border d-block img-fluid mb-3 mx-auto p-3 shadow-lg" hidden onerror="this.onerror = null; this.remove()" onload="this.removeAttribute(\'hidden\')" src="https://lh3.googleusercontent.com/-3Qz-Icc9LhU/ZbHiUWIvHQI/AAAAAABBswE/lAGDHf8ejJEV2V1Eq3wuqfgdyX9D4mFogCNcBGAsYHQ/" /> <a class="btn d-grid gap-2 text-bg-warning" href="https://danaindonesia.app.link/leVPoM1tUDb">Via DANA</a> <img class="border d-block img-fluid mt-3 mx-auto p-3 shadow-lg" hidden onerror="this.onerror = null; this.remove()" onload="this.removeAttribute(\'hidden\')" src="https://lh3.googleusercontent.com/-U_KPd7qepKY/ZbHiBhWtaFI/AAAAAABBsv8/94Cmq6kSpiU1NiCFAqYm82O8HOp9Y00sgCNcBGAsYHQ/" /> <a class="btn d-grid gap-2 mt-3 text-bg-warning" href="https://shopee.co.id/universal-link/wallet/qr?qr_sn=00017ada4e399fa620b3">Via ShopeePay</a> </div> </div>';
if ($matchedAdvertiser !== null) {
$HTMLBody .= ' <ins class="adsbygoogle m-3 p-0" data-ad-client="ca-pub-' . $matchedAdvertiser['publisher'] . '" data-ad-format="auto" data-ad-slot="' . $matchedAdvertiser['slot'][0] . '" data-full-width-responsive="true" style="display:block"> </ins> <script>(adsbygoogle=adsbygoogle||[]).push({});</script>';
}
$HTMLBody .= ' <div class="d-grid gap-2">';
$titlePage .= ' - Download';
foreach ($videoLinkCacheResponse as $videoListIteration) {
$HTMLBody .= ' <a class="btn text-bg-success" href="' . $videoListIteration['link'] . '">Download Video ' . $videoListIteration['resolution'] . '</a>';
}
$HTMLBody .= ' <a class="btn text-bg-primary" href="/stream/' . $currentVideoPath[1] . '/' . $currentVideoPath[2] . '">Stream Video</a> </div>';
if ($matchedAdvertiser !== null) {
$HTMLBody .= ' <ins class="adsbygoogle m-3 p-0" data-ad-client="ca-pub-' . $matchedAdvertiser['publisher'] . '" data-ad-format="autorelaxed" data-ad-slot="' . $matchedAdvertiser['slot'][1] . '" data-matched-content-columns-num="3" data-matched-content-rows-num="3" data-matched-content-ui-type="image_stacked" style="display:block"> </ins> <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>';
}
$HTMLBody .= ' </div>';
} elseif ($currentVideoPath[0] === 'stream') {
$parseHTTP['header']['content-type'] = 'text/html; charset=utf-8';
$HTMLHead .= '<link crossorigin="anonymous" href="https://cdn.jwplayer.com" rel="preconnect" /> <link crossorigin="anonymous" href="https://developer.android.com" rel="preconnect" /> <link href="https://cdn.jwplayer.com" rel="dns-prefetch" /> <link href="https://developer.android.com" rel="dns-prefetch" /> <script src="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"></script> <style>body,html,#player{width:100%!important;height:100%!important;padding:0;margin:0;background-color:#000}</style>';
$titlePage .= ' - Stream';
$parseVideoList = array_map(function ($video) {
return [
'file' => $video['link'],
'label' => $video['resolution'],
'type' => $video['type'] ?? 'video/mp4',
];
}, $videoLinkCacheResponse);
$HTMLBody .= '<div hidden id="player"></div> <script>setTimeout(()=>document.getElementById("ads")?.remove()||document.getElementById("player").removeAttribute("hidden"),5000);let player=jwplayer("player").setup({autostart:!0,doNotSaveCookies:!0,horizontalVolumeSlider:!0,pipIcon:"disabled",playbackRateControls:!0,preload:"none",sources:' . json_encode($parseVideoList, JSON_UNESCAPED_SLASHES) . ',volume:100});
player.addButton("https://lh3.googleusercontent.com/v0UW49SrkxIzfRRhYArIJvP456-QeKT9-1Yxk19gwJESPidGAnJS7n7_sHZe81NpX_E=s128-rw","Donate Via DANA",()=>window.open("https://danaindonesia.app.link/leVPoM1tUDb"),"donate via dana");
player.addButton("https://lh3.googleusercontent.com/e-XzPln3c_xDVW27yWcBavmYC4HYZHJSlILeVbKy2lqG5OmvqDNES6hbyVTrY9revPs=s128-rw","Donate Via ShopeePay",()=>window.open("https://shopee.co.id/universal-link/wallet/qr?qr_sn=00017ada4e399fa620b3"),"donate via shopeepay");
player.addButton("https://developer.android.com/static/images/spot-icons/tools-update.svg","Download Video",()=>window.open(window.location.href.replace("stream","download")),"download");</script>';
}
}
break;
} elseif ($attempt < 3 && in_array($error, [7, 28])) {
sleep(2);
} else {
$parseHTTP['status'] = $error === 28 ? 408 : 503;
break;
}
}
curl_close($curlHandle);
} else {
$parseHTTP['status'] = 400;
}
} else {
if (isset($currentVideoPath[0])) {
if ($currentVideoPath[0] === 'favicon.ico') {
$parseHTTP['status'] = 204;
} elseif ($matchedAdvertiser !== null && $currentVideoPath[0] === 'ads.txt') {
$parseHTTP['body'] = 'google.com, pub-' . $matchedAdvertiser['publisher'] . ', DIRECT, f08c47fec0942fa0';
$parseHTTP['status'] = 200;
} elseif ($currentVideoPath[0] === 'robots.txt') {
$parseHTTP['body'] = 'User-agent: *' . PHP_EOL . 'Disallow: /';
if ($matchedAdvertiser !== null) {
$parseHTTP['body'] .= PHP_EOL . 'Allow: /ads.txt' . PHP_EOL . PHP_EOL . 'User-agent: Mediapartners-Google' . PHP_EOL . 'Allow: /';
}
$parseHTTP['status'] = 200;
}
} else {
$parseHTTP['status'] = 403;
}
}
if ($parseHTTP['header']['content-type'] === 'text/html; charset=utf-8') {
if ($matchedAdvertiser !== null) {
$HTMLHead .= ' <link crossorigin="anonymous" href="https://pagead2.googlesyndication.com" rel="preconnect" /> <link href="https://pagead2.googlesyndication.com" rel="dns-prefetch" /> <script async crossorigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' . $matchedAdvertiser['publisher'] . '"> </script> <style>ins.adsbygoogle[data-ad-status="unfilled"] { display: none !important; }</style>';
}
if ($currentVideoPath[0] === 'download') {
$HTMLHead .= ' <meta content="10" http-equiv="refresh" />';
$parseHTTP['header']['x-frame-options'] = 'DENY';
}
$parseHTTP['body'] = '<!doctype html> <html class="notranslate" lang="en-US" translate="no"> <head> <link crossorigin="anonymous" href="https://lh3.googleusercontent.com" rel="preconnect" /> <link href="https://lh3.googleusercontent.com" rel="dns-prefetch" /> <link crossorigin="anonymous" href="https://drive-thirdparty.googleusercontent.com" rel="preconnect" /> <link href="https://drive-thirdparty.googleusercontent.com" rel="dns-prefetch" /> <link href="https://drive-thirdparty.googleusercontent.com/16/type/video" rel="icon" type="image/png" /> <meta charset="utf-8" /> <meta content="The service exceeds the download and streaming quota of the video." name="description"> <meta content="height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover, width=device-width" name="viewport" /> <meta content="nofollow, noindex" name="robots" /> <meta content="notranslate" name="google" /> ' . $HTMLHead . ' <title>' . $titlePage . '</title> </head> ' . $HTMLBody . ' </body> </html>';
$parseHTTP['status'] = 200;
}
http_response_code($parseHTTP['status']);
foreach ($parseHTTP['header'] as $key => $value) {
header($key . ': ' . $value);
}
if (isset($parseHTTP['body'])) {
echo $parseHTTP['body'];
}
} else {
http_response_code(405);
}
