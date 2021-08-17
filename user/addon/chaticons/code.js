//Import 
chaticon_window = import window(bath_path/overlay/chaticons.js)

//Code
add new @Minecraft_sys_chatlist
    {
      hidden_text = "nativclient_chaticons"
      enabled = true
      active = false
    }
end;

// Open und Close Funktions
function(open)
{
  touch line(9)
  {
    active = true
  }
};

function(close)
{
  touch line(9)
  {
    active = false
  }
};


// Chatwindow Icons öffnen und schließe
function(open_chaticon_window)
{
  onclick open.chaticon_window
};

function(close_chaticon_window)
{
  onclick close.chaticon_window
};

function(loading_chat_icon)
{
  replace function(import_icons)(*) = icon_loading;
                                 sleep(8);
}
