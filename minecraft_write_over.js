public function (replace_mc)
{
build new(replace_mc)
      replace * files from %mc%->installer.js(files);
}

if installer.js(execute)-> true
save * files from %mc% into 'mc_old'
wait(60)
   function start(replace_mc)->*
end
