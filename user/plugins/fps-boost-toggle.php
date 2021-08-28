<?php
$id = $helper->protect($_GET['id']);

$SQL = $db->prepare("SELECT * FROM `player` WHERE `id` = :id");
$SQL->execute(array(":id" => $id));
$userInfos = $SQL -> fetch(PDO::FETCH_ASSOC);

?>

<script>
if <?= $userinfos['$fps_boos_ultra'] ?> = true
   include ../../system/plugins/*/fps_boost_ultra.js
end
</script>
