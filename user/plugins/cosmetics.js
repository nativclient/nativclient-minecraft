// Importations
local shop = var/syns/shop/shopsyn.url
local own = var/syns/database/dbsyn.url get(shop.items)
local player = var/syns/database/dbsyn.url get(minecraft.doc)
local server = var/syns/server/servsyn.url

// Ladevorgang
on(player.connect.server) load shop

// Magier Paket
if own.magier-paket = true
  load shop.magier-paket
end

// Killer Paket
if own.killer-paket = true
  load shop.killer-paket
end

// FIDGETSPINNER
if own.fidgetspinner = true
  load shop.fidgetspinner
end

// SCHLÜSSELANHÄNGER
if own.schluesselanheanger = true
  load shop.schluesselanheanger
end

// Lichtschwert
if own.lichtschwert = true
  load shop.lichtschwert
end

// superbeast-paket
if own.superbeast-paket = true
  load shop.superbeast-paket
end

// pet-paket
if own.pet-paket = true
  load shop.pet-paket
end

// icon-paket
if own.icon-paket = true
  load shop.icon-paket
end

// icon-fluegel
if own.fluegel-paket = true
  load shop.fluegel-paket
end

// inhaber
if own.inhaber-paket = true
  load shop.inhaber-paket
end

// team
if own.team-paket = true
  load shop.team-paket
end

// dev
if own.dev-paket = true
  load shop.dev-paket
end

end
