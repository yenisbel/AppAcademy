require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res, route_params = {})
    @req = req
    @res = res
    @params = route_params.merge(req.params) 
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "Double render error" if already_built_response? 
    @already_built_response = true
    session.store_session(@res)
    @res.status = 302
    @res['location'] = url
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise "Double render error" if already_built_response? 
    @already_built_response = true
    session.store_session(@res)
    @res.write(content)
    @res['Content-Type'] = content_type
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  # controller CatRentalRequests => cat_rental_request
  # W10D5  ./views


  def render(template_name)
    path = File.dirname(__FILE__) #lib directory so need to add .. to go up a folder then in views folder
    fullname = File.join(path,"..","views",self.class.name.underscore,"#{template_name}.html.erb")
    template = File.read(fullname)
    
    render_content(ERB.new(template).result(binding),"text/html")
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(@req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
    render(name) unless already_built_response?
    nil
  end
end
