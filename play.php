<?php
if (empty($_GET['movie'])) {
http_response_code(403);
} else {
$sourcePath = 'cache/' . $_GET['movie'] . '.json';
if (file_exists($sourcePath)) {
error_reporting(0);
$source = json_decode(file_get_contents($sourcePath), true);
if (empty($source['google'])) {
http_response_code(404);
} else {
preg_match(
'/https?:\/\/(?:www\.)?(?:drive|docs)\.google\.com\/(?:file\/d\/|open\?id=)?([a-z0-9A-Z_-]+)(?:\/.+)?/is',
$source['google'],
$match
);
if (!empty($match[1])) {
$curlHandle = curl_init();
curl_setopt_array($curlHandle, [CURLOPT_CONNECTTIMEOUT => 30, CURLOPT_DNS_CACHE_TIMEOUT => 60, CURLOPT_ENCODING => '', CURLOPT_FAILONERROR => true, CURLOPT_FOLLOWLOCATION => true, CURLOPT_FORBID_REUSE => true, CURLOPT_FRESH_CONNECT => true, CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE, CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4, CURLOPT_NOSIGNAL => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_SSL_VERIFYHOST => 0, CURLOPT_SSL_VERIFYPEER => false, CURLOPT_TIMEOUT => 60, CURLOPT_URL => 'https://gdriveplayer.to/embed2.php?link=https://drive.google.com/file/d/' . $match[1] . '/view']);
if (curl_errno($curlHandle) === 7 || curl_errno($curlHandle) === 28) {
http_response_code(408);
echo '{"report":10,"status":408,"url":"' . $_GET['url'] . '"}';
} else {
if (curl_errno($curlHandle) === 0) {
$curlResult = curl_exec($curlHandle);
if ($curlResult) {
echo $curlResult;
} else {
http_response_code(401);
}
} else {
http_response_code(404);
}
}
} else {
http_response_code(404);
}
}
} else {
http_response_code(404);
}
}
