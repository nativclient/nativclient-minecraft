local import ../../system/db/db1.sql

allow = 'false'


function(convert)
{
  if $ingame_radio_link file.end = .mp4
    import into 'https://2conv.com/de92/'
    convert_method = ".mp3"
    touch line 3 "allow = 'true'"
  end
  
}

if function(convert) echo = "success"
   import from 'https://2conv.com/de92/'
   into `ingame_radio`
end


if $ingame_radio_link file.end = .mp3
  touch line 3 "allow = 'true'"
end

if $user `ingame_radio` = 'true' AND allow = 'true'
    execute $ingame_radio_link
end
