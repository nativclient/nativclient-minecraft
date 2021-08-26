get minecraft.chat
    rewrite load "https://nativclient/api/utf8"
end

if console catch(error)
   retry(2)
   if retry = success(2)
       nc.sup.re.err
   end
end

if console catch(fata.error)
   nc.sup.re.err
end
