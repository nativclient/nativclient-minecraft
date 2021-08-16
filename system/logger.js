// Imports
local date = getlocalTime;
local currentimeplusSec = getlocalTime(h.m.s);

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

// Verschönerung der Datei
if catch($error) !== 0
   write file
   {
     time = $currentimeplusSec;
     prefix = [LOGSYSTEM];
     text = $error;
   }
end;
