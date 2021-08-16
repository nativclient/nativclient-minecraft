// Imports
local date = getlocalTime;

// Code
onexecute
{
  create new file
  {
    name = log-$date;
    end = .txt;
    input = ?;
    save-path = bath_path/system/logs
  }
         
}
end;
