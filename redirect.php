<?php
header_remove();
$currentURL = parse_url(
(($_SERVER['REQUEST_SCHEME'] ?? ($_SERVER['HTTPS'] === 'on')) ? 'https' : 'http')
. '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']
);
// redirect ke juragan jika bukan juragan
if (
$currentURL['host'] !== 'juragan.info' &&
$currentURL['host'] !== 'www.juragan.info'
) {

$target = "https://juragan.info" . $_SERVER['REQUEST_URI'];

$HTMLHead = '';
$HTMLBody = '';
$titlePage = 'Preparing Video';

$HTMLHead .= '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4492104810534221" crossorigin="anonymous"></script>';

$HTMLBody .= '<div style="max-width:600px;margin:auto;text-align:center;padding-top:60px;font-family:Arial">
<h2>Preparing Video...</h2>
<p>Please wait while we prepare your request</p>

<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-4492104810534221"
data-ad-slot="2672619891"
data-ad-format="auto"
data-full-width-responsive="true"></ins>

<script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>

<p id="count">Redirecting in 5 seconds...</p>

<button id="go" style="display:none;padding:10px 20px;margin-top:15px">Continue</button>

</div>

<script>

let sec=5;

let timer=setInterval(function(){

sec--;

document.getElementById("count").innerHTML=
"Redirecting in "+sec+" seconds...";

if(sec<=0){

clearInterval(timer);

document.getElementById("go").style.display="inline-block";

}

},1000);

document.getElementById("go").onclick=function(){

window.location.href="'.$target.'";

};

</script>';

echo '<!doctype html><html><head><meta charset="utf-8"><title>'.$titlePage.'</title>'.$HTMLHead.'</head><body style="background:#111;color:#fff">'.$HTMLBody.'</body></html>';

exit;

}