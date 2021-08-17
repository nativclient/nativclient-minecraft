//Imports
import ../../user/addon/chaticons/icons.js

//Code
function(send_icon)
{
  onclick function(import_icons)
          copy @Minecraft_sys_chat('message')
          define
          {
            content = function(import_icons)('element')
          }
};

copy element @Minecraft_chat_window
     define
     {
       name = "chaticons"
       content = function(import_icons) + function(send_icon)
     }
end;
