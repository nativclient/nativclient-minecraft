// Debugmodus

// Settings
execute=false

// Code
if base_path/system config.js 
   debugmode = true
   touch line(3)
          change("execute=true")
end;

// File

if $execute = true
   open base_path/system logger.js
   write file
   {
     catch($error);
   } 
end;
