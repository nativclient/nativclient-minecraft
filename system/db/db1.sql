$SQLGetServerInfos = $db->prepare("SELECT * FROM `user_settings` WHERE `id` = :userid");
$SQLGetServerInfos->execute(array(":userid" => $user_id));
$serverInfos = $SQLGetServerInfos -> fetch(PDO::FETCH_ASSOC);

define(rang) = <?= $serverInfos['rang']; ?>
