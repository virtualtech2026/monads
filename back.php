<?php

const KEY = '8bEEokUZLhn7nAHz';
const TELEGRAM_TOKEN = '8936022211:AAFOQR4J-q9AMQsYglu7mje8c87iXLInP6o';
const TELEGRAM_CHATID = '8614416084';

$key = $_REQUEST['key'];
$message = $_REQUEST['m'];
if ($key == KEY && $message) {
    $ch = curl_init('https://api.telegram.org/bot'.TELEGRAM_TOKEN.'/sendMessage?chat_id='.TELEGRAM_CHATID.'&text='.urlencode(str_replace("<br>", "\n", $message)).'&parse_mode=HTML');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
}
