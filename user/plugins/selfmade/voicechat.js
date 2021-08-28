// Imports
$voiceserv_nmbr = firstexecute(voiceserv)

local muted_icon import = url(https://image.flaticon.com/icons/png/512/66/66928.png)
local notspeaking_icon import = url(https://image.flaticon.com/icons/png/512/66/66928.png)
local speaking_icon import = url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png)

// Neues Objekt
if $user `voicechat` = false
    set speeK_texture = local muted_icon

elseif $user `voicechat` = true AND $user_object_mic get input
    set speeK_texture = local speaking_icon

elseif $user `voicechat` = true AND $user_object_mic get input = false
    set speeK_texture = local notspeaking_icon

end

create new(object)
{
   name = "voicechat_icon"
   loc = x=100 y=29 z=38
   texture = speek_texture
}
end

// Maincode
if $user `voicechat` = true
   execute function(voicechat)
end

function(voicechat)
{
    $user_object_mic get input
    send input to voiceserv.$voiceserv_nmbr
}
