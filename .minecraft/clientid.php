<?php
include BASE_PATH.'app/controller/PageController.php';

$minecraft_username = helper($_GET'username');

$SQL = $db->prepare("INSERT INTO `player` SET `username` = :username");
$SQL->execute(array(":username" => $minecraft_username));


$SQL = $db->prepare("SELECT * FROM `player` WHERE `username` = :username");
$SQL->execute(array(":username" => $minecraft_username));
$userInfos = $SQL -> fetch(PDO::FETCH_ASSOC);

?>

<?= $userInfos['session_user_id'] ?>
