onexecute bath_path/installer.js
           sleep(5)
           get execute from installer.js
end;

if execute = need_update
   load.files from url(https://github.com/nativclient/nativclient-minecraft/)
end;
