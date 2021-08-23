// Imports
$user_icon = @rang

// Creates
get %Minecraft_user_tablist%
    duplicate %Minecraft_user_tablist%
    {
      name = "nativclient_tablist"
    }
end;

touch file(Tablist)
display $user_icon
end;


if rang = "Admin"
img_url = "https://i.ibb.co/FBBN17P/admin-nativclient.png"
end;

if rang = "Dev"
img_url = "https://i.ibb.co/7KdYMTf/dev-nativclient.png"
end;

if rang = "Sup"
img_url = "https://i.ibb.co/3szdqhY/sup-nativclient.png"
end;

if rang = "Partner"
img_url = "https://i.ibb.co/Db0HdVC/partner-nativclient.png"
end;

if rang = "Freund"
img_url = "https://i.ibb.co/Wf6Wsfc/freund-nativclient.png"
end;

if rang = "Spieler"
img_url = "https://i.ibb.co/T2MskW5/spieler-nativclient.png"
end;
