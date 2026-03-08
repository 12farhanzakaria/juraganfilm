<?php
error_reporting(0);
/*
Plugin Name: Player JuraganFilm
*/

function DriveAPI($fileID, $postID) {
$curlHandle = curl_init(); curl_setopt_array($curlHandle, [CURLOPT_CONNECTTIMEOUT => 30, CURLOPT_DNS_CACHE_TIMEOUT => 60, CURLOPT_ENCODING => '', CURLOPT_FAILONERROR => true, CURLOPT_FOLLOWLOCATION => true, CURLOPT_FORBID_REUSE => true, CURLOPT_FRESH_CONNECT => true, CURLOPT_HEADER => true, CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_NONE, CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4, CURLOPT_NOBODY => true, CURLOPT_NOSIGNAL => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_SSL_VERIFYHOST => 0, CURLOPT_SSL_VERIFYPEER => false, CURLOPT_TIMEOUT => 60, CURLOPT_URL => 'https://api.juraganfilm.my.id/?file=' . $fileID . '&post=' . $postID]); curl_exec($curlHandle);
}
function jf_crypt($string, $action) {
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $secret_key = 'RNzX3Hf7gFSguuq';
    $secret_iv = '2c3TEbDPrLcgVt5';
    $key = hash('sha256', $secret_key);
        $iv = substr(hash('sha256', $secret_iv), 0, 16);

    if ( $action == 'e' ) {
        $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
        $output = base64_encode($output);
    } else if( $action == 'd' ) {
        $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
    }

    return $output;
}

/*
htplugins series
*/
function dramaseri($url, $fm, $sth) {
    // tanda overwrite
    if (!function_exists('jf_crypt')) {
        return;
    }

    global $post;

    if (!isset($post)) {
        return;
    }

    $cosubs = get_post_meta(get_the_ID(), 'bosubs', true);
    $bugs = get_post_meta(get_the_ID(), 'bugs', true);

    $api_domainurl = home_url();
    $api_title = get_the_title();
    $api_titles = urlencode($api_title);
    $postid = get_the_ID();
    $api_post_slug = $post->post_name;

    if (has_post_thumbnail()) {
        $api_image = get_the_post_thumbnail_url();
    } else {
        $api_image = home_url('/wp-content/uploads/2020/07/default.jpg');
    }

    $api_isviews = get_post_meta(get_the_ID(), 'views', true);
    $ref_path = $_SERVER['REQUEST_URI'];

    $path_parts = explode('/', trim($ref_path, '/'));
    $last_part = end($path_parts);
    $episode_number = is_numeric($last_part) ? intval($last_part) : 1;
    $episode = sprintf("%02d", $episode_number);

    $api_type = 'Film Seri';
    $api_title_player = $api_title . ' EPS ' . $episode;
    $api_id = $api_post_slug . '-eps-' . $episode . '-' . $postid;

    $post_data = http_build_query([
        'access_key' => 'kTRdFmT3eLQ2ju58',
        'domains' => $api_domainurl,
        'title_player' => $api_title_player,
        'postid' => $api_id,
        'img' => $api_image,
        'type' => $api_type,
        'gd' => $url,
        'fm' => $fm,
        'sth' => $sth,
    ]);

    $url_api = 'https://juragan.info/stream/apikey.php';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url_api);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $result = curl_exec($ch);

    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
        curl_close($ch);
        return "cURL error: " . $error_msg;
    }

    curl_close($ch);

    $datepost = get_the_time('Y-m-d');
    $timepost = get_the_time('H:i:s');

    // Duration
    $duration = get_post_meta($post->ID, 'IDMUVICORE_Runtime', true);
    if (!empty($duration)) {
        $backup = get_the_date('d');
        $richduration = $duration;
        $richduration = str_replace('00', '1'.$backup.'', $richduration);
    } else {
        $richduration = get_the_date('d');
        $richduration = '1'.$richduration.'';
    }

    $pagination = wp_link_pages(
        array(
            'before'      => '<div class="page-links"><span class="page-text">' . esc_html__('Episodes:', 'muvipro') . '</span>',
            'after'       => '</div>',
            'link_before' => '<span class="page-link-number">',
            'link_after'  => '</span>',
            'echo'        => 1,
        )
    );
    $api_title = str_replace(' jf', '', $api_title);
    $api_title = str_replace('Nonton ', '', $api_title);
    $api_title = str_replace(' Sub Indo', '', $api_title);
    $api_title = preg_replace("/[^a-zA-Z0-9\s]/", "", $api_title);
    $api_title = str_replace(' ', '-', $api_title);
    $richSnippetJson = [
        "@context" => "https://schema.org",
        "@type" => "VideoObject",
        "name" => "'.$api_title_player.'",
        "description" => "'.$api_title_player.'",
        "thumbnailUrl" => "'.$api_image_json.'",
        "uploadDate" => "'.$datepost.'T'.$timepost.'Z",
        "duration" => "PT'.$richduration.'M",
        "contentUrl" => "https://juragan.info/stream/?movie='.$api_id.'",
        "embedUrl" => "https://juragan.info/stream/?movie='.$api_id.'",
        "interactionCount" => "'.$api_isviews.'"
    ];

    $richSnippet = '<script type="application/ld+json">' . json_encode($richSnippetJson) . '</script>';

    // Improved player output with better button structure
    $source = '
        ' . $richSnippet . '
        <style>
        /* Fix for cut-off player controls */
        .gmr-server-wrap {
            background: #000 !important;
            border-radius: 8px !important;
            overflow: visible !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
            margin-bottom: 20px !important;
            position: relative !important;
        }
        
        .tab-content > div {
            padding-top: 56.25% !important;
            padding-bottom: 0 !important;
            display: block !important;
            width: 100% !important;
            position: relative !important;
            background: #000 !important;
            border-radius: 8px 8px 0 0 !important;
        }
        
        .tab-content iframe {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            border: none !important;
            border-radius: 8px 8px 0 0 !important;
        }
        
        .gmr-player-nav {
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 12px 15px !important;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
            border-top: 2px solid #333 !important;
            border-radius: 0 0 8px 8px !important;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.2) !important;
            min-height: 50px !important;
            position: relative !important;
            z-index: 10 !important;
            margin: 0 !important;
            clear: both !important;
        }
        
        .gmr-player-nav li {
            list-style: none !important;
            margin: 5px !important;
            display: inline-block !important;
        }
        
        .gmr-player-nav a {
            display: inline-flex !important;
            align-items: center !important;
            padding: 8px 12px !important;
            background: rgba(255,255,255,0.1) !important;
            border: 1px solid rgba(255,255,255,0.2) !important;
            border-radius: 5px !important;
            color: #ffffff !important;
            text-decoration: none !important;
            transition: all 0.3s ease !important;
            font-size: 12px !important;
            font-weight: 500 !important;
        }
        
        .gmr-player-nav a:hover {
            background: rgba(255,255,255,0.2) !important;
            border-color: rgba(255,255,255,0.4) !important;
            transform: translateY(-1px) !important;
        }
        
        .download-btn {
            background: linear-gradient(45deg, #ff6b35, #f7931e) !important;
            border: 1px solid #ff6b35 !important;
            color: white !important;
            font-weight: bold !important;
        }
        
        .download-btn:hover {
            background: linear-gradient(45deg, #e55a2b, #e8821a) !important;
            border-color: #e55a2b !important;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3) !important;
        }
        
        @media (max-width: 768px) {
            .gmr-player-nav {
                flex-direction: column !important;
                align-items: stretch !important;
                padding: 10px !important;
            }
            .gmr-player-nav li {
                margin: 3px 0 !important;
            }
            .gmr-player-nav a {
                width: 100% !important;
                justify-content: center !important;
                padding: 10px !important;
            }
        }
        </style>
        <div class="gmr-server-wrap clearfix">
            <div class="tab-content">
                <div style="padding-top:56.25%;display:block;width:100%;position:relative;background:#000;border-radius:8px 8px 0 0;">
                    <iframe name="juraganfilm" scrolling="no" src="https://juragan.info/stream/?movie='.$api_id.'" style="border:none;overflow:hidden;height:100%;width:100%;position:absolute;top:0;left:0;border-radius:8px 8px 0 0;" allowfullscreen></iframe>
                </div>
            </div>
            <ul class="gmr-player-nav clearfix">
                <li><a href="javascript:void(0)" class="gmr-switch-button" title="Turn off light">
                    <span style="color:#ffbf00;margin-right:5px;">💡</span>
                    <span style="color:#ffffff;font-weight:bold;">Matikan Lampu</span>
                </a></li>
                <li><a href="#tab-mars" onClick="window.location.reload(true)" title="Refresh Page">
                    <span style="color:#ffbf00;margin-right:5px;">🔄</span>
                    <span style="color:#ffffff;font-weight:bold;">Reload</span>
                </a></li>
                <li><a>
                    <span style="color:#ffbf00;margin-right:5px;">👁</span>
                    <span style="color:#ffffff;font-weight:bold;">'.$api_isviews.'</span>
                </a></li>
                <li><a class="download-btn" href="https://juragan.info/stream/dload.php?movie='.$api_id.'" title="Download '.$api_title_player.'" target="_blank" rel="nofollow noopener">
                    <span style="margin-right:5px;">⬇</span>Download
                </a></li>
            </ul>
        </div>
        <div class="gmr-moviedata" style="background:#1a1a1a;border:1px solid #333;border-radius:0 0 8px 8px;padding:10px 15px;color:#ffffff;font-size:12px;">
            <strong>'.$cosubs.'<br/>Revisi:</strong> '.$bugs.'
        </div>
        '.$pagination.'
    ';
if ($url) {
DriveAPI($url, $api_id);
}
    return $source;
}

if (!class_exists('dramaseri_player')) {
    class dramaseri_player {
        function __construct() {
            if (!function_exists('add_shortcode')) {
                return;
            }
            add_shortcode('htplugins', array($this, 'dramaseri_func'));
        }

        function dramaseri_func($atts = array(), $content = null) {
            extract(shortcode_atts(array('url' => '', 'fm' => '', 'sth' => ''), $atts));
            $source .= dramaseri($url, $fm, $sth);
            return $source;
        }
    }
}

function dramaseri_load() {
    global $htpluginsP;
    $htpluginsP = new dramaseri_player();
}
add_action('plugins_loaded', 'dramaseri_load');

/*
Shortcode for movies
*/
function movie($url, $fm, $sth)
{
    $source = '';

    if (!function_exists('jf_crypt')) {
        return;
    }

    global $post;
    $postid = get_the_ID();
    $api_domainurl = home_url();
    $api_title_player = get_the_title();
    $api_title_download = str_replace('Nonton', 'Download', $api_title_player);
    $api_post_slug = $post->post_name;
    $api_isviews = get_post_meta(get_the_ID(), 'views', true);
    $api_type = 'Movie';

    $api_image = '';
    if (has_post_thumbnail()) {
        $api_image = get_the_post_thumbnail_url();
        $api_image_json = str_replace('/', '\\/', $api_image);
    } else {
        $api_image = home_url('/wp-content/uploads/2020/07/default.jpg');
        $api_image_json = str_replace('/', '\\/', $api_image);
    }

    if (empty($url)) {
        $url = get_post_meta($postid, 'IDMUVICORE_Player1', true);
    }
    $api_google = $url;

    if (empty($sth)) {
        $api_sth = get_post_meta($postid, 'IDMUVICORE_Player2', true);
    }
    $api_sth = $sth;

    if (empty($fm)) {
        $api_fm = get_post_meta($postid, 'IDMUVICORE_Player3', true);
    }
    $api_fm = str_replace('filemoon.sx', 'lkc21.net', $api_fm);
    $api_fm = $fm;

    $api_id = $api_post_slug . '-' . $postid;
    $post_data = 'access_key=kTRdFmT3eLQ2ju58&domains='.$api_domainurl.'&title_player='.$api_title_player.'&postid='.$api_id.'&img='.$api_image.'&type='.$api_type.'&gd='.$api_google.'&fm='.$api_fm.'&sth='.$api_sth.'';

    $url_api = "https://juragan.info/stream/apikey.php";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url_api);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    curl_close($ch);

    // Rich snippet data
    $datepost = get_the_time('Y-m-d');
    $timepost = get_the_time('H:i:s');
    
    $duration = get_post_meta($post->ID, 'IDMUVICORE_Runtime', true);
    if (!empty($duration)) {
        $backup = get_the_date('d');
        $richduration = $duration;
        $richduration = str_replace('00', '1'.$backup.'', $richduration);
    } else {
        $richduration = get_the_date('d');
        $richduration = '1'.$richduration.'';
    }

    $richSnippetJson = [
        "@context" => "https://schema.org",
        "@type" => "VideoObject",
        "name" => $api_title_player,
        "description" => $api_title_player,
        "thumbnailUrl" => $api_image_json,
        "uploadDate" => $datepost . "T" . $timepost . "Z",
        "duration" => "PT" . $richduration . "M",
        "contentUrl" => "https://juragan.info/stream/?movie=" . $api_id,
        "embedUrl" => "https://juragan.info/stream/?movie=" . $api_id,
        "interactionCount" => $api_isviews
    ];
    $richSnippet = '<script type="application/ld+json">' . json_encode($richSnippetJson) . '</script>';
    
    // Movie player with strict iframe containment
    $source = '
        ' . $richSnippet . '
<style>

.video-player iframe{
width:100%;
height:520px;
border:none;
display:block;
}

.video-controls-bar{
background:#2a2a2a;
padding:15px;
display:flex;
gap:10px;
flex-wrap:wrap;
}

.video-control-button{
background:#444;
padding:10px 15px;
border-radius:6px;
color:#fff;
text-decoration:none;
}

.download-button{
background:#ff6b35;
}

</style>

<div class="video-player">

<iframe 
name="juraganfilm"
src="https://juragan.info/stream/?movie='.$api_id.'"
scrolling="no"
allowfullscreen
frameborder="0">
</iframe>

<div class="video-controls-bar">

<a class="video-control-button" onclick="toggleLights()">💡 Lampu</a>

<a class="video-control-button" onclick="location.reload()">🔄 Reload</a>

<span class="video-control-button">👁 '.$api_isviews.'</span>

<a href="https://juragan.info/stream/dload.php?movie='.$api_id.'" 
class="video-control-button download-button">⬇ Download</a>

</div>

</div>
        
        <script>
        function toggleLights() {
            const body = document.body;
            if (body.style.backgroundColor === "rgb(0, 0, 0)" || body.style.backgroundColor === "black") {
                body.style.backgroundColor = "";
            } else {
                body.style.backgroundColor = "black";
            }
            body.style.transition = "background-color 0.3s ease";
        }
        </script>
    ';

    if ($api_google) {
        DriveAPI($api_google, $api_post_slug);
    }
    return $source;
}
if(!class_exists('movie_player')) {
        class movie_player {
                function __construct() {
                        if(!function_exists('add_shortcode')) {
                                return;
                        }
                        add_shortcode( 'htmovies' , array($this, 'movie_func') );
                }

                function movie_func($atts = array(), $content = null) {
                        extract(shortcode_atts(array('url' => '', 'fm' => '', 'sth' => ''), $atts));
                        $source .=  movie($url, $fm, $sth);
                        return $source;
                }
        }
}
function movie_load() {
        global $movieX;
        $movieX = new movie_player();
}
add_action('plugins_loaded', 'movie_load');

/*
Shortcode for Fembed
*/
function my_fembed($atts, $content = null) {
        global $fembedid;

        extract(shortcode_atts(array(
                "id" => '',
                "sub" => ''
     ), $atts));
        $fembedid = $id;
                return '';
}
add_shortcode('fb', 'my_fembed');

define('ROOTDIR', plugin_dir_path(__FILE__));