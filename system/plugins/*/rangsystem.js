// Imports
$user_rang = @rang

// Creates
get %Minecraft%
  file(user_name_tag)
name="Rangtag"
end;

touch file(Rangtag)
display "Native " $user_rang
end;


if rang = "Admin"
color = dark_red
end;

if rang = "Dev"
color = #09B1CF
end;

if rang = "Sup"
color = #0012EE
end;

if rang = "Freund"
color = #01CD11
end;

if rang = "Spieler"
color = #797979
end;
