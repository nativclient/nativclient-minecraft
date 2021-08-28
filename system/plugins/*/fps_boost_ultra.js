// Imports
local prozessor = get $user object_processor

// Settings
local settings_low =  
 {
  fps_limit = -1
  chunks = 5
  clouds = 4
  trees = 2
  sky = 2
  sun_moon = 2
  fog = 3
  translucent_blocks = 3
  dropped_items = 2
  vignette = 2
  swamp_colors = 2
  rain_snow = 4
  stars = 2
  show_capes = 2
  entity_shadows = 2
  smooth_biomes = 2
  clear_water = 2
  better_grass = 1
  custom_fonts = 2
  connected_textures = 1
  custom_sky = 2
  custom_entity_models = 2
  emissive_textures = 1
  random_entities = 1
  better_snow = 1
  custom_colors = 2
  natural_textures = 1
  custom_items = 2
  custom_guis = 2
  particles = 3
}

local settings_medium =  
 {
  chunks = 8
  clouds = 2
  trees = 3
  sky = 1
  sun_moon = 1
  fog = 3
  translucent_blocks = 3
  dropped_items = 2
  vignette = 2
  swamp_colors = 2
  rain_snow = 4
  stars = 1
  show_capes = 2
  entity_shadows = 2
  smooth_biomes = 2
  clear_water = 2
  better_grass = 1
  custom_fonts = 2
  connected_textures = 1
  custom_sky = 2
  custom_entity_models = 2
  emissive_textures = 1
  random_entities = 1
  better_snow = 1
  custom_colors = 2
  natural_textures = 2
  custom_items = 2
  custom_guis = 2
  particles = 2
}

local settings_high =  
 {
  fps_limit = -1
  chunks = 12
  clouds = 3
  trees = 3
  sky = 1
  sun_moon = 1
  fog = 2
  translucent_blocks = 2
  dropped_items = 3
  vignette = 3
  swamp_colors = 1
  rain_snow = 3
  stars = 1
  show_capes = 1
  entity_shadows = 1
  smooth_biomes = 1
  clear_water = 1
  better_grass = 3
  custom_fonts = 1
  connected_textures = 3
  custom_sky = 1
  custom_entity_models = 1
  emissive_textures = 2
  ranom_entities = 2
  better_snow = 2
  custom_colors = 1
  natural_textures = 2
  custom_items = 1
  custom_guis = 1
  particles = 1
}

// Prozessoren
if prozessor ~~ "Intel Core i7700"
   local import "settings_medium"
end


if prozessor ~~ "Intel Core i5"
   local import "settings_medium"
end



if prozessor ~~ "Intel Core i3"
   local import "settings_high"
end



if prozessor ~~ "Intel Core i5"
   local import "settings_medium"
end



if prozessor ~~ "Intel Core i9"
   local import "settings_high"
end
