if $version['release'] > $verion['release-used']
   function(update)
end

function(update)
{
  minecraft.get-version.$version
}

if minecraft.version < '1.6', == '1.7', == '1.9', == '1.10', == '1.11', == '1.13', == '1.14', == '1.15', == '1.17', == '1.18'
   minecraft.kill
   echo 'Diese Version wird nicht unterstützt'
end

// alpha
