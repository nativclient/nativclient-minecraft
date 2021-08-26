// Imports
$voiceserv_nmbr = firstexecute(voiceserv)

// Maincode
if $user `voicechat` = true
   execute function(voicechat)
end

function(voicechat)
{
    $user_object_mic get input
    send input to voiceserv.$voiceserv_nmbr
}