// Versionen "bekommen"
onexecute bath_path/installer.js
           get installer_version from installer.js
end;

onexecute bath_path/installer.js
           get installer_version from bath_path/system/config.js
end;


// Versions vergleich
if installer_version == server_version
   touch file installer.js 
          change execute = true
end;

if installer_version !== server_version
   touch file installer.js 
          change execute = need_update
end;
