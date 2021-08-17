// Imports
$user_rang = @rang

// Creates
get %Minecraft_user_nametag%
    duplicate %Minecraft_user_nametag%
    {
      name = "nativclient_rank"
    }
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

if rang = "Partner"
color = #8C04D0
end;

if rang = "Freund"
color = #01CD11
end;

if rang = "Spieler"
color = #797979
end;
