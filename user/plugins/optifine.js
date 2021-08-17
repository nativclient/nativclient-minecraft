 if @User_config_optifine = true

function(optifine_plugin)
{
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
  end;
