require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    cookie = req.cookies["_rails_lite_app"]
    if cookie
      @vari = JSON.parse(cookie)
    else
      @vari = {}
    end

  end


  def [](key)
    @vari[key]
  end

  def []=(key, val)
    @vari[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    cookie = { path: '/', value: @vari.to_json }
    res.set_cookie("_rails_lite_app", cookie)
    
  end
end
