local import @Minecraft

function(fps_boost_minimal)
{
  disable @Minecraft_chunks
  set @Minecraft_chunks = 2

  set @Minecraft_fps_limit = -1

  set @Minecraft_particles = 0

  set @Minecraft_graphic = 1
  
  set @Minecraft_clouds = 4
  
  set @Minecraft_weather = 2
  
  set @Minecraft_stars = 2
  
  set @Minecraft_entity_shadows = 2
  
  set @Minecraft_fog = 2
  
  set @Minecraft_sun_moon = 2
  
  set @Minecraft_shadow_lightning = 1
}

function(fps_boost_optifine)
{
  
  set @Minecraft_system_rendering = 10%
    
    get(@User_version);
  
  if @User_version = 1_8_8
    import optifine_latest.js = get(function(optifine_1.8.8))
    end;
                                    
  if @User_version = 1_12
    import optifine_latest.js = get(function(optifine_1.12))
    end;
  
  if @User_version = 1_17
    import optifine_latest.js = get(function(optifine_1.17))
    end;
}


function(fps_boost_maximal)
{
  
  set @Minecraft_system_rendering = 10%
    
    get(function(fps_boost_minimal))
    
    get(@User_version);
  
  if @User_version = 1_8_8
    import optifine_latest.js = get(function(optifine_1.8.8))
    end;
                                    
  if @User_version = 1_12
    import optifine_latest.js = get(function(optifine_1.12))
    end;
  
  if @User_version = 1_17
    import optifine_latest.js = get(function(optifine_1.17))
    end;
}
