// !!!old!!!

//onexecute installer.exe
//!  load * from local .minecraft into user .minecraft
//end

// !!!old!!!

if installer.exe globalfunction(execute) = true
   function(overwrite)
end

function(overwrite)
{
  select * from .minecraft copy(clipboard)
  paste(clipboard) = $user_minecraft
  continue = true
}
