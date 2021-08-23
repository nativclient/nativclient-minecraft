// Imports
local time = $time
local game = ../../nativmc.exe
local logs = ../../system/logsystem.js


// Maincode
if game is 
   started = true
   touch line 14 rewrite "timer = true"
end


// Settings
timer = false


// Timer Code
function(timer)
{
  if timer = true
    get current_time
    name = "start-time"
    if game is
       started = false
       get current_time
       name = "end-time"
     end
   end
}

execute logs
     write.file
     name = "Spiellog $current_time"
     text = "$start-time - $end-time"
end
