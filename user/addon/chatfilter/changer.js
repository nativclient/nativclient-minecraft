// Imports
local import config.js


// Chatfilter Farbe anpassen
function(chatfilter_change_color)
{
  message_color = $color
};

// Wort hinzufügen
create new function(chatfilter_add_wort)
{
  wort = $new_wort
};

// Wort löschen
create new function(chatfilter_delete_wort)
{
  $delete_wort = local function(chatfilter_wort)
};

// Wort bearbeiten
create new function(chatfilter_edit_wort)
{
  $edit_wort = local function(chatfilter_wort) change = $newedit_wort
}
