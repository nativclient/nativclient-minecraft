$SQLGetServerInfos = $db->prepare("SELECT * FROM `user_settings` WHERE `id` = :userid");
$SQLGetServerInfos->execute(array(":userid" => $user_id));
$serverInfos = $SQLGetServerInfos -> fetch(PDO::FETCH_ASSOC);

define(rang) = <?= $serverInfos['rang']; ?>
define(user) = <?= $serverInfos['user']; ?>
define(friends) = <?= $serverInfos['friends']; ?>
define(banned) = <?= $serverInfos['banned']; ?>
define(amount) = <?= $serverInfos['amount']; ?>
define(cosmetics) = <?= $serverInfos['cosmetics']; ?>
define(status) = <?= $serverInfos['status']; ?>
