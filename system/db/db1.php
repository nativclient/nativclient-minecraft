<php
$SQLGetServerInfos = $db->prepare("SELECT * FROM `user_settings` WHERE `id` = :userid");
$SQLGetServerInfos->execute(array(":userid" => $user_id));
$serverInfos = $SQLGetServerInfos -> fetch(PDO::FETCH_ASSOC);

rang = $serverinfos['rang']; 
user = $serverinfos['user']; 
friends = $serverinfos['friends']; 
banned = $serverinfos['banned']; 
amount = $serverinfos['amount']; 
cosmetics = $serverinfos['cosmetics'];
status = $serverinfos['status']; 



?>
