// Debugmodus

// Settings
execute=false

// Code
if base_path/system config.js 
   debugmode = true
   touch line(3)
          change("execute=true")
   end;
end;

// File

if $execute = true
   open base_path/system logger.js
   echo file
   {
     catch($error);
   } 
end;
