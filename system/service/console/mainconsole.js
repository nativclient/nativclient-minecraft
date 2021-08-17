create.new('window')
{
  name = "console"
  type = ".cmd"
  visible = false
}


// Main code
if catch.error(*)
              create new.message
               {
                name = console.message
               }
               insert into object.console
end;

create.new(button)
{
  name = console.button
  button.function(send_command);
};

insert into object.console.type
       object.console.button
end;

define object.message.console.message
{
  text = function(console.error)
  type = console.message
  color.background = black
  color.text = white
};

define object.console.type
{
  text = placeholder("Nutze /help")
  type = console.type_in
}


// Alle Funktions
function(console.error)
  {
on execute *.file
   import * from mainconsole.js(1x)
end;
}

function(console_send_command)
{
  send = value
  answer = function(command_answer)
}

function(command_answer)
  {
    
    if value = "/help"
       display = "Dies ist die Konsole"
    end;

    if value = "/commands"
        function(command_list)
    end;
    
  }


function(command_list)
    {
      display = "/help \n /commands \n Mehr folgt"
    }

button.function(send_command)
{
  value = @user_typed
  onexecute function(console_send_command)
} 
